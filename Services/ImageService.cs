using MajorBlog.WebApi.Entities;
using MajorBlog.WebApi.Helpers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MajorBlog.WebApi.Services
{
    public class ImageService
    {
        private DataContext _context;

        public ImageService(DataContext context)
        {
            _context = context;
        }

        //[HttpPost]
        //public Image Create(IFormFile imageFile)
        //{

        //}
    }
}
