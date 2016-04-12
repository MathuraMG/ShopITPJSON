module.exports = {
  getEquipmentData: function(equipmentData, equipmentResponse, noOfEquipments,res)
  {
    //console.log('inside test function -- '+ index );

  		var parsedData = equipmentData;
      //console.log(parsedData);
      if(parsedData.data.length>0)
      {
    		var keyName =  Object.keys(parsedData.data[0])[1];
        console.log('obtaining data for -- ' + keyName );

        var equipmentEnergy = [];
        var totalEnergyOffPeak = 0;
        var totalEnergyPeak = 0;
        for(var i =0;i<parsedData.data.length;i++)
        {
          equipmentEnergy[i] = {x:i,y:parsedData.data[i][keyName]*1000};
          if(i%96<40)
          {
            totalEnergyOffPeak += parsedData.data[i][keyName]*1000;
          }
          else
          {
            totalEnergyPeak += parsedData.data[i][keyName]*1000;
          }

        }
        //console.log('total energy is -- ' + totalEnergy);
        equipmentResponse.push({name:keyName,value: equipmentEnergy,totalEnergyOffPeak: totalEnergyOffPeak, totalEnergyPeak: totalEnergyPeak});


      }
      else{

      }
      //console.log('the length of the response is - ' + equipmentResponse.length + ' -- length of equipments is -- ' + noOfEquipments);
      if(equipmentResponse.length == noOfEquipments)
      {
        res.send(equipmentResponse);
      }
      else{

      }


  }
};
