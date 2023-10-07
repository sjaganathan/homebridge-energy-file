var fs = require('fs');
var Service, Characteristic;

module.exports = function(homebridge) {
  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;

  homebridge.registerAccessory("homebridge-energy-file", "EnergyFile", EnergyFileAccessory);
}

function EnergyFileAccessory(log, config) {
  this.log = log;
  this.name = config["name"];
  this.filePath = config["file_path"];
  this.reading = 0;

  this.service = new Service.LightSensor(this.name);

  this.service
    .getCharacteristic(this.Characteristic.CurrentAmbientLightLevel)
    .on('get', this.getState.bind(this));
}

EnergyFileAccessory.prototype.getState = function(callback) {
  fs.readFile(this.filePath, 'utf8', function(err, data) {
    if (err) {
      callback(err);
      return
    }

    callback(null, parseFloat(data))
  })
}

EnergyFileAccessory.prototype.getServices = function() {
  return [this.service];
}
