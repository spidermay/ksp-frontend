export class numberToString {  

    constructor(){}
    
    private Units(num: number): string{
        switch(num) {
            case 1: return "UN";
            case 2: return "DOS";
            case 3: return "TRES";
            case 4: return "CUATRO";
            case 5: return "CINCO";
            case 6: return "SEIS";
            case 7: return "SIETE";
            case 8: return "OCHO";
            case 9: return "NUEVE";
        }

        return "";
    }
    
    private Tens(num: number): string {
        var tens = Math.floor(num/10);
        var unity = num - (tens * 10);
    
        switch(tens) {
            case 1:
                switch(unity) {
                    case 0: return "DIEZ";
                    case 1: return "ONCE";
                    case 2: return "DOCE";
                    case 3: return "TRECE";
                    case 4: return "CATORCE";
                    case 5: return "QUINCE";
                    default: return "DIECI" + this.Units(unity);
                }
            case 2:
                switch(unity) {
                    case 0: return "VEINTE";
                    default: return "VEINTI" + this.Units(unity);
                }
            case 3: return this.TensY("TREINTA", unity);
            case 4: return this.TensY("CUARENTA", unity);
            case 5: return this.TensY("CINCUENTA", unity);
            case 6: return this.TensY("SESENTA", unity);
            case 7: return this.TensY("SETENTA", unity);
            case 8: return this.TensY("OCHENTA", unity);
            case 9: return this.TensY("NOVENTA", unity);
            case 0: return this.Units(unity);
        }
    } 

    private TensY(strSin, numUnits): string {
        return (numUnits > 0)? strSin + " Y " + this.Units(numUnits) : strSin;
    }
    
    private Hundreds(num: number): string {
        var hundreds = Math.floor(num / 100);
        var tens = num - (hundreds * 100);
    
        switch(hundreds) {
            case 1:
                if (tens > 0){
                    return "CIENTO " + this.Tens(tens);
                }
                return "CIEN";
            case 2: return "DOSCIENTOS " + this.Tens(tens);
            case 3: return "TRESCIENTOS " + this.Tens(tens);
            case 4: return "CUATROCIENTOS " + this.Tens(tens);
            case 5: return "QUINIENTOS " + this.Tens(tens);
            case 6: return "SEISCIENTOS " + this.Tens(tens);
            case 7: return "SETECIENTOS " + this.Tens(tens);
            case 8: return "OCHOCIENTOS " + this.Tens(tens);
            case 9: return "NOVECIENTOS " + this.Tens(tens);
        }

        return this.Tens(tens);
    }
    
    private Section(num?, divider?, strSingular?, strPlural?){
        var hundreds = Math.floor(num / divider)
        var rest = num - (hundreds * divider)
        var letters = "";
    
        if(hundreds > 0){
            if (hundreds > 1){
                letters = this.Hundreds(hundreds) + " " + strPlural;
            } else {
                letters = strSingular;
            }
        }
        
        return (rest > 0)? letters += "" : letters;
    }
    
    
    private Thousands(num: number): string {
        var divider = 1000;
        var hundreds = Math.floor(num / divider)
        var rest = num - (hundreds * divider)
        var strThousands = this.Section(num, divider, "UN MIL", "MIL");
        var strHundreds = this.Hundreds(rest);
    
        return (strThousands == "")? strHundreds : strThousands + " " + strHundreds;
    }
    
    private Millions(num) {
        var divider = 1000000;
        var hundreds = Math.floor(num / divider)
        var rest = num - (hundreds * divider)
    
        var strMillions = this.Section(num, divider, "UN MILLON DE", "MILLONES DE");
        var strThousands = this.Thousands(rest);
    
        return (strMillions == "")?  strThousands : strMillions + " " + strThousands;
    }
    
    public numberToString(num) {
        var data = {
            number: num,
            integer: Math.floor(num),
            cents: (((Math.round(num * 100)) - (Math.floor(num) * 100))),
            stringCents: "/100 M.N.",
            stringCoins: 'PESOS',//"PESOS", 'Dólares', 'Bolívares', 'etcs'
            stringCoin: 'PESO', //"PESO", 'Dólar', 'Bolivar', 'etc'
    
            lettersCoinCentPlural: "CENTAVOS",
            lettersCoinCentSingular: "CENTAVO"
        };
    
        // console.log(data.cents);
    
        // if (data.cents > 0) {
        //     data.stringCents = "CON " + (function (){
        //         if (data.cents == 1)
        //             return this.Millions(data.cents) + " " + data.lettersCoinCentSingular;
        //         else
        //             return this.Millions(data.cents) + " " + data.lettersCoinCentPlural;
        //         })();
        // };
    
        if(data.integer == 0){
            return "CERO " + data.stringCoins + " " + data.cents + data.stringCents;
        }
        
        if (data.integer == 1) {
            return this.Millions(data.integer) + " " + data.stringCoin + " " + data.cents + data.stringCents;
        } else {
            return this.Millions(data.integer) + " " + data.stringCoins + " " + data.cents + data.stringCents;
        }
    }



    // private Units(num: number): string{
    //     switch(num) {
    //         case 1: return "ONE";
    //         case 2: return "TWO";
    //         case 3: return "THREE";
    //         case 4: return "FOUR";
    //         case 5: return "FIVE";
    //         case 6: return "SIX";
    //         case 7: return "SEVEN";
    //         case 8: return "EIGTH";
    //         case 9: return "NINE";
    //     }
    // }
    
    // private Tens(num: number): string {
    //     var tens = Math.floor(num/10);
    //     var unity = num - (tens * 10);
    
    //     switch(tens) {
    //         case 1:
    //             switch(unity){
    //                 case 0: return "TEEN";
    //                 case 1: return "ELEVEN";
    //                 case 2: return "TWELVE";
    //                 default: return this.Units(unity) + "TEEN";
    //             }
    //         case 2: return "TWEENTY " + this.Units(unity);
    //         case 3: return "THIRTY " + this.Units(unity);
    //         case 4: return "FORTY" + this.Units(unity);
    //         case 5: return "FIFTY" + this.Units(unity);
    //         case 6: return "SIXTY" + this.Units(unity);
    //         case 7: return "SEVENTY" + this.Units(unity);
    //         case 8: return "EIGHTY" + this.Units(unity);
    //         case 9: return "NINETY" + this.Units(unity);
    //         case 0: return this.Units(unity);
    //     }
    // } 
    
    // private Hundreds(num: number): string {
    //     var hundreds = Math.floor(num / 100);
    //     var tens = num - (hundreds * 100);
    
    //     switch(hundreds) {
    //         case 1:
    //             if (tens > 0)
    //                 return "ONE HUNDRED " + this.Tens(tens);
    //             return "HUNDRED";
    //     }
    
    //     return this.Units(hundreds) + " HUNDRED " + this.Tens(tens);
    // }
    
    // private Section(num?, divider?, strSingular?, strPlural?){
    //     var hundreds = Math.floor(num / divider)
    //     var rest = num - (hundreds * divider)
    //     var letters = "";
    
    //     if(hundreds > 0){
    //         if (hundreds > 1){
    //             letters = this.Hundreds(hundreds) + " " + strPlural;
    //         } else {
    //             letters = strSingular;
    //         }
    //     }
            
    
    //     if (rest > 0)
    //         letters += "";
    
    //     return letters;
    // }
    
    
    // private Thousands(num: number): string {
    //     var divider = 1000;
    //     var hundreds = Math.floor(num / divider)
    //     var rest = num - (hundreds * divider)
    
    //     var strThousands = this.Section(num, divider, "ONE THOUSAND", "THOUSAND");
    //     var strHundreds = this.Hundreds(rest);
    
    //     return (strThousands == "")? strHundreds : strThousands + " " + strHundreds;
    // }
    
    // private Millions(num) {
    //     var divider = 1000000;
    //     var hundreds = Math.floor(num / divider)
    //     var rest = num - (hundreds * divider)
    
    //     var strMillions = this.Section(num, divider, "ONE MILLION OF", "MILLION");
    //     var strThousands = this.Thousands(rest);
    
    //     if(strMillions == "")
    //         return strThousands;
    
    //     return strMillions + " " + strThousands;
    // }
    
    // public numberToString(num) {
    //     var data = {
    //         number: num,
    //         integer: Math.floor(num),
    //         cents: (((Math.round(num * 100)) - (Math.floor(num) * 100))),
    //         stringCents: "/100 M.N.",
    //         stringCoins: 'PESOS',//"PESOS", 'Dólares', 'Bolívares', 'etcs'
    //         stringCoin: 'PESO', //"PESO", 'Dólar', 'Bolivar', 'etc'
    
    //         lettersCoinCentPlural: "CENTAVOS",
    //         lettersCoinCentSingular: "CENTAVO"
    //     };
    
    //     // console.log(data.cents);
    
    //     // if (data.cents > 0) {
    //     //     data.stringCents = "CON " + (function (){
    //     //         if (data.cents == 1)
    //     //             return this.Millions(data.cents) + " " + data.lettersCoinCentSingular;
    //     //         else
    //     //             return this.Millions(data.cents) + " " + data.lettersCoinCentPlural;
    //     //         })();
    //     // };
    
    //     if(data.integer == 0){
    //         return "CERO " + data.stringCoins + " " + data.cents + data.stringCents;
    //     }
        
    //     if (data.integer == 1) {
    //         return this.Millions(data.integer) + " " + data.stringCoin + " " + data.cents + data.stringCents;
    //     } else {
    //         return this.Millions(data.integer) + " " + data.stringCoins + " " + data.cents + data.stringCents;
    //     }
    // }
}