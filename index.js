function introduction(name = "Ivan") {
    return `Hi, my name is ${name}.`;
  }
  
  
  function introductionWithLanguage(name = "Ivan", language = "java") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  
  function introductionWithLanguageOptional(name = "Ivan", language = '') {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
    
    }
  
  function introductionWithLanguageOptional(name = "Ivan", language = "JavaScript") {
      return `Hi, my name is ${name} and I am learning to program in ${language}.`;
      
  }
  
