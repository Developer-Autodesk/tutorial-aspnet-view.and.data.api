#Autodesk View and Data API Client Sample using ASP.NET Webform 


##Description

This is an ASP.NET Webform sample that shows how to embed 3D models into the Autodesk viewer on a web page. 

##Dependencies

This sample uses the [RestSharp](http://restsharp.org/) library. You can add it to your project using NuGet in Visual Studio.

This sample does not include the workflow of uploading models. You can use other workflow samples to upload models. 

##Setup/Usage Instructions

This repository includes two projects: FirstViewerWebApp and "FirstViewerWebApp - lab".

FirstViewerWebApp is the completed sample. You can set it up using the following steps: 

* Use your credentials from http://developer.autodesk.com.
* Open FirstViewerWebApp.sln in the FirstViewerWebApp folder.
* Replace the consumer key and secret key place holders in credentials.cs.
* Upload one of your models to your account and retrieve its URN using one of the other workflow samples, such as the [.net winform application](https://github.com/Developer-Autodesk/workflow-dotnet-winform-view.and.data.api/). Please refer to [lab_document.pdf](lab_document.pdf) if you do not how to use this workflow sample. 
* Copy your translated model URN into script/viewer.js, replacing the placeholder value for "urn" with it, around line #10(optional).
* Build and run the sample, paste your URN into the text box on the page, and press the "Load Model" button. 

"FirstViewerWebApp - lab" is the uncompleted version. As an exercise, you can complete the sample yourself by following the steps described in [lab_document.pdf](lab_document.pdf).


## License

This sample is licensed under the terms of the [MIT License](http://opensource.org/licenses/MIT). Please see the [LICENSE](LICENSE) file for full details.

##Written by 

Daniel Du





    
