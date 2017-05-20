sensor output -> multiplyer fn
- create 5 vals
- data builder
  - randomly offset values by +/-10% from orig
  - rare random "wild" temp +/-40% from orig 1/80 readings
  - rare random "offline" 1/100 readings
  - random timestamp within +/-2sec
  - rare random "late" timestamp +/-3-9sec :: potential double reading...


Chart last "3 days" - 1hr 30min
- grab window of data based on timestamp
- split data into matrix of samples
  - filter by timestamp
  - use timestamp counter?
  - grab by +/-2sec from timestamp
  - "true" arg means make estimation for missing sensor data. **STRETCH**
    - run some other calculating fn for those
- avg for temp per inner-array/sampling
- map the reduce/length of all those vals
- pass array of avgereged samples to chart



### BOUNS

- "true" arg means make estimation for missing sensor data. **STRETCH**
  - run some other calculating fn for those
- rare random "late" timestamp +/-3-9sec :: potential double reading...
- Use ESP8266
- Use MQTT
