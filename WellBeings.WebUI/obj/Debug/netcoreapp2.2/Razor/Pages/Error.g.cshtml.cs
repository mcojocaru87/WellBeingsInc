#pragma checksum "C:\Users\admin\source\repos\mcojocaru87\WellBeingsInc\WellBeings.WebUI\Pages\Error.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "7fd915ee4bec34de4ddabe6a7692c244d65c1fbe"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(WellBeings.WebUI.Pages.Pages_Error), @"mvc.1.0.razor-page", @"/Pages/Error.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.RazorPages.Infrastructure.RazorPageAttribute(@"/Pages/Error.cshtml", typeof(WellBeings.WebUI.Pages.Pages_Error), null)]
namespace WellBeings.WebUI.Pages
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "C:\Users\admin\source\repos\mcojocaru87\WellBeingsInc\WellBeings.WebUI\Pages\_ViewImports.cshtml"
using WellBeings.WebUI;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"7fd915ee4bec34de4ddabe6a7692c244d65c1fbe", @"/Pages/Error.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"b0f024c1f2c3dcb327605ce4ae9134c63fc01762", @"/Pages/_ViewImports.cshtml")]
    public class Pages_Error : global::Microsoft.AspNetCore.Mvc.RazorPages.Page
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 3 "C:\Users\admin\source\repos\mcojocaru87\WellBeingsInc\WellBeings.WebUI\Pages\Error.cshtml"
  
    ViewData["Title"] = "Error ";

#line default
#line hidden
            BeginContext(68, 120, true);
            WriteLiteral("\r\n<h1 class=\"text-danger\">Error.</h1>\r\n<h2 class=\"text-danger\">An error occurred while processing your request.</h2>\r\n\r\n");
            EndContext();
#line 10 "C:\Users\admin\source\repos\mcojocaru87\WellBeingsInc\WellBeings.WebUI\Pages\Error.cshtml"
 if (Model.ShowRequestId)
{

#line default
#line hidden
            BeginContext(218, 52, true);
            WriteLiteral("    <p>\r\n        <strong>Request ID:</strong> <code>");
            EndContext();
            BeginContext(271, 15, false);
#line 13 "C:\Users\admin\source\repos\mcojocaru87\WellBeingsInc\WellBeings.WebUI\Pages\Error.cshtml"
                                      Write(Model.RequestId);

#line default
#line hidden
            EndContext();
            BeginContext(286, 19, true);
            WriteLiteral("</code>\r\n    </p>\r\n");
            EndContext();
#line 15 "C:\Users\admin\source\repos\mcojocaru87\WellBeingsInc\WellBeings.WebUI\Pages\Error.cshtml"
}

#line default
#line hidden
            BeginContext(308, 572, true);
            WriteLiteral(@"
<h3>Development Mode</h3>
<p>
    Swapping to the <strong>Development</strong> environment displays detailed information about the error that occurred.
</p>
<p>
    <strong>The Development environment shouldn't be enabled for deployed applications.</strong>
    It can result in displaying sensitive information from exceptions to end users.
    For local debugging, enable the <strong>Development</strong> environment by setting the <strong>ASPNETCORE_ENVIRONMENT</strong> environment variable to <strong>Development</strong>
    and restarting the app.
</p>
");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<ErrorModel> Html { get; private set; }
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<ErrorModel> ViewData => (global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<ErrorModel>)PageContext?.ViewData;
        public ErrorModel Model => ViewData.Model;
    }
}
#pragma warning restore 1591
