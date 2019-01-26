
class Valida{
    constructor(content, status){
        this.messages = {};
        this.statusCode = status || 400;
        this.content = content;
    }

    isEmail(data){
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
           
        return regex.test(data);        
    }

    isNotNull = function(data) {
        if (!data)
            return false;
    
        return true;
    }

    .testLength = function(data){    

        let res = true;
    
        data.min = data.min || 1;
        
        if (data.data.lenght < data.min || data.data.length > data.max)
            res = false;
    
        return res;        
    }
}

module.exports = Valida;