const rawPrintServer = require('raw-print-server'),
      port = (parseInt(process.argv[2]) ? parseInt(process.argv[2]) : 7000),
      password = (Boolean(process.argv[3]) ? process.argv[3] : 'xEPgJ5EjKdw1Rtg0');

      
rawPrintServer(port, password);