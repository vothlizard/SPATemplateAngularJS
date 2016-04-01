using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SPATemplateAngularJS.Startup))]
namespace SPATemplateAngularJS
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
           // ConfigureAuth(app);
        }
    }
}
