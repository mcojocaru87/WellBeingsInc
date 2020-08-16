using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WellBeings.Infrastructure.Services.Contracts;

namespace WellBeings.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IDataSeeder _dataSeeder;

        public ProductsController(IDataSeeder dataSeeder)
        {
            _dataSeeder = dataSeeder;
        }

        [HttpGet]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public IActionResult Get()
        {
            var productList = _dataSeeder.ProductList();

            if (productList != null && productList.Count() > 0)
            {
                return Ok(productList);
            }

            return NotFound();
        }
    }
}