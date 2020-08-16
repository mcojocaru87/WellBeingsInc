using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using WellBeings.WebUI.ViewModels;

namespace WellBeings.WebUI.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly IConfiguration _configuration;
        private readonly string _requestUri = "products";

        public ProductsController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public async Task<IActionResult> GetProducts()
        {
            IEnumerable<ProductViewModel> products = null;

            try
            {
                using (var client = new HttpClient())
                {
                    client.BaseAddress = new Uri(_configuration["WebApiUrl"]);
                    var responseTask = await client.GetAsync(_requestUri);

                    if (responseTask.IsSuccessStatusCode)
                    {
                        var readTask = await responseTask.Content.ReadAsAsync<IList<ProductViewModel>>();
                        products = readTask;
                    }
                    else
                    {
                        return BadRequest();
                    }
                }

                return Ok(products);
            }
            catch (HttpRequestException e)
            {
                return StatusCode((int)HttpStatusCode.RequestTimeout, e);
            }
            catch (Exception ex)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, ex);
            }
        }
    }
}