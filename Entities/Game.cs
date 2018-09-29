using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MajorBlog.WebApi.Entities
{
    public class Game
    {

    public int Id { get; set; }
    public string Title { get; set; }
        public string Platforms { get; set; }
        public string Description { get; set; }
        public IEnumerable<Image> Images { get; set; }
    }
}
