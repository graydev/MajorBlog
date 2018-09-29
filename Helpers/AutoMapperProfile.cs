using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MajorBlog.WebApi.Dtos;
using MajorBlog.WebApi.Entities;
using AutoMapper;

namespace MajorBlog.WebApi.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserDto>();
            CreateMap<UserDto, User>();
            CreateMap<Article, ArticleDto>();
            CreateMap<ArticleDto, Article>();
        }
    }
}
