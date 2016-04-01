using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SPATemplateAngularJS.Controllers
{
    public class MainController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Main()
        {
            return PartialView();
        }

        public ActionResult DataCapture()
        {
            return PartialView();
        }

        public ActionResult Sketch()
        {
            return PartialView();
        }
    }
}