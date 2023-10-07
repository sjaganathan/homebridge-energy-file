# homebridge-energy-file

This is a plugin for [homebridge](https://github.com/nfarina/homebridge) which makes it possible to create an energy (light) sensor
in HomeKit via file. This plugin uses code from homebridge-temperature-file and homebridge-sense-power-meter

## Why via file?

When you have a DHT-sensor, you need `sudo` to read from it. I don't want to run homebridge as `sudo`, so I'm having a `cronjob`, 
which writes every n seconds to a file and read from it from homebridge.

## Example config

```json
{
  "accessory": "EnergyFile",
  "name": "Energy-sensor",
  "description": "Electricity consumption",
  "file_path": "/tmp/reading.txt"
}
```
