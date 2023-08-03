param location string = resourceGroup().location

resource melodiePortaalASP 'Microsoft.Web/serverFarms@2022-03-01' = {
  name: 'asp-o-melodie-windows'
  location: location
  sku: {
    name: 'F1'
  }
}

resource melodiePortaalSite 'Microsoft.Web/sites@2022-09-01' = {
  location: location
  name: 'app-o-melodie-portaal'
  properties: {
    serverFarmId: melodiePortaalASP.id
    httpsOnly: true
  }
}

resource melodiePortaalSiteConfig 'Microsoft.Web/sites/config@2022-09-01' = {
  name: 'web'
  parent: melodiePortaalSite
  properties: {
    virtualApplications: [
      {
        physicalPath:'site\\wwwroot\\dist\\melodie-portaal'
        virtualPath:'/'
      }
    ]
  }
}
