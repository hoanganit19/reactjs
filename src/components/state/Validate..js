class Validate {
  constructor() {
    this.errors = {};
  }

  isEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  run = (rules = {}, messages = {}) => {
    if (Object.keys(rules).length) {
      Object.keys(rules).forEach((fieldName) => {
        const rulesContent = rules[fieldName];
        if (rulesContent !== undefined) {
          const value = window[fieldName]?.value;
          this.errors[fieldName] = {};
          const rulesContentArr = rulesContent.split("|");
          rulesContentArr.forEach((rule) => {
            const ruleArr = rule.split(":");
            const ruleName = ruleArr[0];

            if (
              ruleName === "required" &&
              (value === undefined || value === "")
            ) {
              this.errors[fieldName][ruleName] =
                messages[`${fieldName}.${ruleName}`];
            }

            if (ruleName === "email" && this.isEmail(value) === null) {
              this.errors[fieldName][ruleName] =
                messages[`${fieldName}.${ruleName}`];
            }

            if (ruleName === "min") {
              if (ruleArr[1] !== undefined && value.length < ruleArr[1]) {
                this.errors[fieldName][ruleName] = messages[
                  `${fieldName}.${ruleName}`
                ].replaceAll(":min", ruleArr[1]);
              }
            }

            if (ruleName === "max") {
              if (ruleArr[1] !== undefined && value.length > ruleArr[1]) {
                this.errors[fieldName][ruleName] = messages[
                  `${fieldName}.${ruleName}`
                ].replaceAll(":max", ruleArr[1]);
              }
            }
          });
        }
      });
    }

    if (!this.getErrors()) {
      return true; //validate thành công
    }

    return false; //validate không thành công
  };

  getErrors = () => {
    if (Object.keys(this.errors).length) {
      let count = 0;
      Object.keys(this.errors).forEach((fieldName) => {
        const errorObj = this.errors[fieldName];
        if (Object.keys(errorObj).length === 0) {
          count++;
        }
      });

      if (count === Object.keys(this.errors).length) {
        return false;
      }
    }

    return true;
  };

  getError = (fieldName) => {
    if (this.errors[fieldName] !== undefined) {
      const error = this.errors[fieldName];
      if (Object.keys(error).length) {
        return error[Object.keys(error)[0]];
      }
    }

    return null;
  };
}

export default Validate;
