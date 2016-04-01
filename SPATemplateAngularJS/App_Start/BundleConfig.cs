using System.Web;
using System.Web.Optimization;

namespace SPATemplateAngularJS
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new Bundle("~/Content/files/css-one")
               .Include("~/Content/font-awesome/font-awesome.css")
               .Include("~/Content/app/main.css")
               );

            bundles.Add(new Bundle("~/bundles/files/modernizr")
                .Include("~/Scripts/bootstrap/modernizr-2.6.2-respond-1.1.0.js"));

            bundles.Add(new Bundle("~/bundles/files/scripts")
               .Include("~/Scripts/jquery/jquery-{version}.js")
               .Include("~/Scripts/angular/angular.js")
               .Include("~/Scripts/angular/angular-route.js")
                .Include("~/Scripts/angular/angular-resource.js")
                .Include("~/Scripts/angular/angular-md5.min.js")
                .Include("~/Scripts/angular/angularJsOAuth2.js")
                .Include("~/Scripts/angular/angular-cookies.js")
                .Include("~/Scripts/bootstrap/bootstrap.js")
                .Include("~/Scripts/kendo/kendo.all.min.js")
                .Include("~/Scripts/kendo/kendo.web.min.js")
                .Include("~/Scripts/app/main/app.js")
                .Include("~/Scripts/app/main/ctrlMain.js")
                .Include("~/Scripts/app/services/HttpInterceptor.js")
                .Include("~/Scripts/app/services/UtilitiesService.js")
                .Include("~/Scripts/app/modules/OfficeLinkProxyModule.js")
                .Include("~/Scripts/app/modules/OfficeLinkLoggingModule.js")
                .Include("~/Scripts/app/modules/OfficeLinkUserModule.js")
               );

            BundleTable.EnableOptimizations = false;
        }
    }
}
