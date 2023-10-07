# homebridge-energy-file

This is a plugin for [homebridge](https://github.com/nfarina/homebridge) which makes it possible to create an energy (light) sensor
in HomeKit via file. This plugin uses code from homebridge-temperature-file and homebridge-sense-power-meter

## Why via file?

I use rtlamr to read from the netmeter and subtract from the monthly reading to display on MagicMirror and HomeKit.

## Example config

```json
{
  "accessory": "EnergyFile",
  "name": "Energy-sensor",
  "description": "Electricity consumption",
  "file_path": "/tmp/reading.txt"
}
```
