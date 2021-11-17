let input = document.getElementById("input")
let result = document.getElementById("result")
let inputType = document.getElementById("inputType")
let resultType = document.getElementById("resultType")
let swapButton = document.getElementById("swapButton")
let convSelect = document.getElementById("convSelect")
let inputTypeValue = inputType.value
let resultTypeValue = resultType.value
let inputMult
let resultMult

input.addEventListener("keyup",converter)
inputType.addEventListener("change",converter)
resultType.addEventListener("change",converter)
swapButton.addEventListener("click",swaping)
swapButton.addEventListener("click",converter)
convSelect.addEventListener("change",selector)
convSelect.addEventListener("change",converter)

function selector(){
    if(convSelect.value == "energy"){
        document.getElementById("option1_1").innerHTML = "Joule (J)"
        document.getElementById("option1_2").innerHTML = "Kilojoule (kJ)"
        document.getElementById("option1_3").innerHTML = "Kilowatt-Hour (kW*h)"
        document.getElementById("option1_4").innerHTML = "Megawatt-Hour (MW*h)"
        document.getElementById("option1_5").innerHTML = "British thermal unit (Btu)"
        document.getElementById("option1_6").innerHTML = "Million Btu (MMBtu)"
        document.getElementById("option1_7").innerHTML = "Barrel of Oil Equiv (BOE)"
        document.getElementById("option1_8").innerHTML = "Kilocalorie (kcal)"
        document.getElementById("option1_9").innerHTML = "Tonne Of Coal Equiv (TCE)"
        document.getElementById("option2_1").innerHTML = "Joule (J)"
        document.getElementById("option2_2").innerHTML = "Kilojoule (kJ)"
        document.getElementById("option2_3").innerHTML = "Kilowatt-Hour (kW*h)"
        document.getElementById("option2_4").innerHTML = "Megawatt-Hour (MW*h)"
        document.getElementById("option2_5").innerHTML = "British thermal unit (Btu)"
        document.getElementById("option2_6").innerHTML = "Million Btu (MMBtu)"
        document.getElementById("option2_7").innerHTML = "Barrel of Oil Equiv (BOE)"
        document.getElementById("option2_8").innerHTML = "Kilocalorie (kcal)"
        document.getElementById("option2_9").innerHTML = "Tonne Of Coal Equiv (TCE)"
        document.getElementById("option1_1").value = "joule"
        document.getElementById("option1_2").value = "kilojoule"
        document.getElementById("option1_3").value = "kwh"
        document.getElementById("option1_4").value = "mwh"
        document.getElementById("option1_5").value = "btu"
        document.getElementById("option1_6").value = "mmbtu"
        document.getElementById("option1_7").value = "boe"
        document.getElementById("option1_8").value = "kcal"
        document.getElementById("option1_9").value = "tce"
        document.getElementById("option1_9").style = "display:initial"
        document.getElementById("option2_1").value = "joule"
        document.getElementById("option2_2").value = "kilojoule"
        document.getElementById("option2_3").value = "kwh"
        document.getElementById("option2_4").value = "mwh"
        document.getElementById("option2_5").value = "btu"
        document.getElementById("option2_6").value = "mmbtu"
        document.getElementById("option2_7").value = "boe"
        document.getElementById("option2_8").value = "kcal"
        document.getElementById("option2_9").value = "tce"
        document.getElementById("option2_9").style = "display:initial"
        
    }
    else if(convSelect.value == "volume") {
        document.getElementById("option1_1").innerHTML = "Cubic Meter (m³)"
        document.getElementById("option1_2").innerHTML = "Barrel (bbl)"
        document.getElementById("option1_3").innerHTML = "Cubic Foot (ft³)"
        document.getElementById("option1_4").innerHTML = "Liter (l)"
        document.getElementById("option1_5").innerHTML = "Gallon (gal)"
        document.getElementById("option1_6").innerHTML = "Cubic Inch (in³)"
        document.getElementById("option1_7").innerHTML = "Cubic Centimeter (cm³)"
        document.getElementById("option1_8").innerHTML = "Board Foot (bf)"
        document.getElementById("option1_9").innerHTML = ""
        document.getElementById("option2_1").innerHTML = "Cubic Meter (m³)"
        document.getElementById("option2_2").innerHTML = "Barrel (bbl)"
        document.getElementById("option2_3").innerHTML = "Cubic Foot (ft³)"
        document.getElementById("option2_4").innerHTML = "Liter (l)"
        document.getElementById("option2_5").innerHTML = "Gallon (gal)"
        document.getElementById("option2_6").innerHTML = "Cubic Inch (in³)"
        document.getElementById("option2_7").innerHTML = "Cubic Centimeter (cm³)"
        document.getElementById("option2_8").innerHTML = "Board Foot (bf)"
        document.getElementById("option2_9").innerHTML = ""
        document.getElementById("option1_1").value = "cubicmeter"
        document.getElementById("option1_2").value = "barrel"
        document.getElementById("option1_3").value = "cubicfoot"
        document.getElementById("option1_4").value = "liter"
        document.getElementById("option1_5").value = "gallon"
        document.getElementById("option1_6").value = "cubicinch"
        document.getElementById("option1_7").value = "cubiccentimeter"
        document.getElementById("option1_8").value = "boardfoot"
        document.getElementById("option1_9").value = "gay"
        document.getElementById("option1_9").style = "display:none"
        document.getElementById("option2_1").value = "cubicmeter"
        document.getElementById("option2_2").value = "barrel"
        document.getElementById("option2_3").value = "cubicfoot"
        document.getElementById("option2_4").value = "liter"
        document.getElementById("option2_5").value = "gallon"
        document.getElementById("option2_6").value = "cubicinch"
        document.getElementById("option2_7").value = "cubiccentimeter"
        document.getElementById("option2_8").value = "boardfoot"
        document.getElementById("option2_9").value = "gay"
        document.getElementById("option2_9").style = "display:none"
    }
}

function swaping(){
    [inputType.value, resultType.value] = [resultType.value, inputType.value]
}

function converter(){
    inputTypeValue = inputType.value
    resultTypeValue = resultType.value
    
switch(inputTypeValue){
    case "cubicmeter":
        inputMult = 1000    
        break
    case "barrel":
        inputMult = 158.987294928
        break
    case "cubicfoot":
        inputMult = 28.316864592 
        break
    case "liter":
        inputMult = 1
        break
    case "gallon":
        inputMult = 3.785411784
        break
    case "cubicinch":
        inputMult = 0.016387064
        break
    case "cubiccentimeter":
        inputMult = 0.001
        break    
    case "boardfoot":
        inputMult = 2.3597372
        break
    case "gay":
        inputMult = 0
        break
    case "joule":
        inputMult = 0.001    
        break
    case "kilojoule":
        inputMult = 1
        break
    case "kwh":
        inputMult = 3600 
        break
    case "mwh":
        inputMult = 3600000
        break
    case "btu":
        inputMult = 1.05506
        break
    case "mmbtu":
        inputMult = 1055060
        break
    case "boe":
        inputMult = 6117863.2
        break    
    case "kcal":
        inputMult = 4.184
        break
    case "tce":
        inputMult = 29307600
        break
}
switch(resultTypeValue){
    case "cubicmeter":
        resultMult = 1000    
        break
    case "barrel":
        resultMult = 158.987294928
        break
    case "cubicfoot":
        resultMult = 28.316864592 
        break
    case "liter":
        resultMult = 1
        break
    case "gallon":
        resultMult = 3.785411784
        break
    case "cubicinch":
        resultMult = 0.016387064
        break
    case "cubiccentimeter":
        resultMult = 0.001
        break    
    case "boardfoot":
        resultMult = 2.3597372
        break
    case "gay":
        resultMult = 0
        break
    case "joule":
        resultMult = 0.001    
        break
    case "kilojoule":
        resultMult = 1
        break
    case "kwh":
        resultMult = 3600 
        break
    case "mwh":
        resultMult = 3600000
        break
    case "btu":
        resultMult = 1.05506
        break
    case "mmbtu":
        resultMult = 1055060
        break
    case "boe":
        resultMult = 6117863.2
        break    
    case "kcal":
        resultMult = 4.184
        break
    case "tce":
        resultMult = 29307600
        break
}
let temp = input.value*(inputMult/resultMult)
result.value = temp.toFixed(3)
}

