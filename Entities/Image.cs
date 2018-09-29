using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MajorBlog.WebApi.Entities
{
    public class Image
    {

    public int Id { get; set; }
    public string FileName { get; set; }
        public DateTime DateUploaded { get; set; }
    }
}
