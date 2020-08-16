using System;
using System.Collections.Generic;
using System.Text;

namespace WellBeings.Infrastructure.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price
        {
            get
            {
                return new decimal(new Random().Next(100, 500));
            }
        }
        public string ImgUrl
        {
            get
            {
                return "http://via.placeholder.com/100x35";
            }
        }
    }
}
