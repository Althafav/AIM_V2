import Globals from "./Globals";


export default class formatParameter {
  static formatUrlParameter = (name: string) => {
    // Replace spaces with hyphens
    name = name.replace(/\s+/g, "-");

    // Remove special characters
    name = name.replace(/[?.:,"'’/()%]/g, "");

    // Convert to lowercase
    name = name.toLowerCase();

    // Remove leading and trailing hyphens
    name = name.replace(/^-+|-+$/g, "");

    return name;
};

  


  static formatLink = (link: string) => {
    if (link != "") {
      if (link == "#" || link == "javascript:0") {
        return "javascript:0";
      }
      else {
        if (link.includes("https")) {
          return link;
        }
        else {
          return `${Globals.BASE_URL_AIM_Website}${link}`
        }
      }

    }

    return link;
  };

  static getRandomInteger(min: number = 0, max: number): number {
    // Calculate a random integer within the given range
    // Math.floor(Math.random() * (max - min + 1)) + min generates an integer between min and max
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  static getUploadFile = (image: any) => {
    var file;
    if (image) {
      file = image.files[0];
    }
    return file;
  };

  static getSessionDate = () => {
    const storageItem = localStorage.getItem(Globals.PROJECT_ID);
    if (storageItem) {
      var getrecordParse = JSON.parse(storageItem);
      return getrecordParse["date"];
    }
  };


  static serializeArray(form: any) {
    var field,
      l,
      s = [];
    if (typeof form == "object" && form.nodeName == "FORM") {
      var len = form.elements.length;
      for (var i = 0; i < len; i++) {
        field = form.elements[i];
        if (
          field.name &&
          !field.disabled &&
          field.type != "file" &&
          field.type != "reset" &&
          field.type != "submit" &&
          field.type != "button"
        ) {
          if (field.type == "select-multiple") {
            l = form.elements[i].options.length;
            var j: number;
            for (j = 0; j < l; j++) {
              if (field.options[j].selected)
                s.push({
                  name: field.name,
                  value: field.options[j].value,
                });
            }
          } else if (
            (field.type != "checkbox" && field.type != "radio") ||
            field.checked
          ) {
            s.push({ name: field.name, value: field.value });
          }
        }
      }
    }
    return s;
  }
}
