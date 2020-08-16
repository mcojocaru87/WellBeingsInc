using System;
using System.Collections.Generic;
using System.Text;
using WellBeings.Infrastructure.Models;

namespace WellBeings.Infrastructure.Services.Contracts
{
    public interface IDataSeeder
    {
        IEnumerable<Product> ProductList();
    }
}
