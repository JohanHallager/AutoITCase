using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Umbraco.Web.WebApi;
using System.Web.Http;
using System.Threading.Tasks;
using System.Web.Hosting;
using Newtonsoft.Json;

namespace CodeCaseAutoIT.Controllers.WebAPI
{
    public class CarsApiController : UmbracoApiController
    {
        public List<Car> _cars { get; set; }
        public CarsApiController()
        {
            var jsonDataFile = System.IO.File.ReadAllText(HostingEnvironment.MapPath(@"~/json_data/cars_data.json"));
            var cars =  JsonConvert.DeserializeObject<List<Car>>(jsonDataFile);
            if (cars.Any())
            {
                _cars = cars;
            }

        }

        // /umbraco/Api/CarsApi/GetCars
        [HttpGet]
        public List<Car> GetCars()
        {

            return _cars;
        }

        // /umbraco/Api/CarsApi/GetCarByName?name=string
        [HttpGet]
        public Car GetCarByName(string name)
        {
            var car = _cars.FirstOrDefault(c => c.Name.ToLower() == name.ToLower());
            return car;
        }

        
        public List<Car> GetAllCarsByOrigin(string origin)
        {
            var cars = _cars.Where(c => c.Origin.ToLower() == origin.ToLower());
            return cars.ToList();
        }
        // /umbraco/Api/CarsApi/GetOrigins
        [HttpGet]
        public List<string> GetOrigins()
        {
            var origins = _cars.GroupBy(c => c.Origin).Select(o=>o.Key);

            return origins.ToList();
        }
    }

    public class Car
    {
        public string Name { get; set; }
        public float? Miles_per_Gallon { get; set; }
        public int Cylinders { get; set; }
        public float Displacement { get; set; }
        public int? Horsepower { get; set; }
        public int Weight_in_lbs { get; set; }
        public float Acceleration { get; set; }
        public string Year { get; set; }
        public string Origin { get; set; }

    }



}