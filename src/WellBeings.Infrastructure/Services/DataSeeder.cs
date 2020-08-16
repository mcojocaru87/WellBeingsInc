using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WellBeings.Infrastructure.Models;
using WellBeings.Infrastructure.Services.Contracts;

namespace WellBeings.Infrastructure.Services
{
    public class DataSeeder : IDataSeeder
    {
        public IEnumerable<Product> ProductList()
        {
            return Enumerable.Range(1, 9).Select(index => new Product
            {
                Id = index,
                Name = $"Lorem ipsum dolor sit amet - Item {index}",
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis feugiat vivamus at augue eget arcu dictum varius."
            });
        }
    }
}
