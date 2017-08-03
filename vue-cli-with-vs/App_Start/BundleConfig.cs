using System.Web;
using System.Web.Optimization;

namespace vue_cli_with_vs
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {            
            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                      "~/Scripts/app.build.js"));

            bundles.Add(new StyleBundle("~/Content/app").Include(
                      "~/Content/app.build.css"));
        }
    }
}
