using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MajorBlog.WebApi.Dtos
{
    public class ArticleDto
    {
        public string Title { get; set; }
        public string Author { get; set; }
        public string Content { get; set; }
        public DateTime DatePosted { get; set; }
        public DateTime LastUpdated { get; set; }
    }
}
