$(document).ready(function() {
    
    var currentstep = 0;
    
    $("#step1").hide();
    $("#step2").hide();
    
    
    $("#btnStep1").click(function() {
        
        $("#step1").show();
        $("#step2").hide();
        
        currentstep = 1;    
    });
    
        $("#btnStep2").click(function() {
        
        $("#step2").show();
        $("#step1").hide();
        
        currentstep = 2;    
    });
    
    var Person = function(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
        
    }

    function logpersoon(Person){
        console.log(Person);
    }
    
    var Erik = new Person('Erik','van der Hoeven');
    logpersoon(Erik)
    
    
});