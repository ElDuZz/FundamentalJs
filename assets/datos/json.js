let invoice = { number: '1',
                client: 'LIVINGLAB', 
                currency: 'USD',
                coords: {
                    lat: 42.0,
                    lon: -108.1
                },
                services: ['LAPTOS','COFFE','GAS','INTERNET'],
                location: {cp:'31100', adrees:'AV AMERICAS'},
                subtotal: 500,
                IVA: 60
                }

console.log(invoice)
document.writeln('Cliente: ',invoice.client)
console.log('Cliente:', invoice['client'])
console.log('Latitud:',invoice.coords.lat)
document.writeln('Servicios: ' , invoice.services[3])

console.log('Ultimo servicio:', invoice.services[invoice.services.length -1])