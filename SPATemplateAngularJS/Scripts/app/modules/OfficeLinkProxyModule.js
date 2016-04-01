var OfficeLinkApiUrl = 'http://www.scm-rms.ca/Api/OfficeLink/';
//var OfficeLinkApiUrl = 'http://localhost:60995/';

function tWorkflowReviewComment() {
    var self = this;
}
tWorkflowReviewComment.prototype.RequestID = null;
tWorkflowReviewComment.prototype.ReviewComment = '';

function tWorkflowHiveAdjustmentReasonDataGroup() {
    var self = this;
}
tWorkflowHiveAdjustmentReasonDataGroup.prototype.Data = null;
tWorkflowHiveAdjustmentReasonDataGroup.prototype.RequestID = null;
tWorkflowHiveAdjustmentReasonDataGroup.prototype.LockGUID = '';

function tWorkflowHiveAdjustmentData() {
    var self = this;
}
tWorkflowHiveAdjustmentData.prototype.HiveAdjustmentReasonID = null;
tWorkflowHiveAdjustmentData.prototype.RequestID = null;

function tWorkflowHiveDataGroup() {
    var self = this;
}
tWorkflowHiveDataGroup.prototype.Data = null;
tWorkflowHiveDataGroup.prototype.LockGUID = '';

function tWorkflowHiveData() {
    var self = this;
}
tWorkflowHiveData.prototype.AdjustedPropertyCodeValue = null;
tWorkflowHiveData.prototype.AdjustmentFactor = null;
tWorkflowHiveData.prototype.AdjustmentFormat = '';
tWorkflowHiveData.prototype.AllocatedPropertyCodeValue = null;
tWorkflowHiveData.prototype.AllocationCostGroup = '';
tWorkflowHiveData.prototype.BaseCostGroup = '';
tWorkflowHiveData.prototype.CategoryCode = '';
tWorkflowHiveData.prototype.CategoryCodeDescription = '';
tWorkflowHiveData.prototype.Direction = '';
tWorkflowHiveData.prototype.HiveRunDataGUID = '';
tWorkflowHiveData.prototype.HiveRunID = null;
tWorkflowHiveData.prototype.ParentPropertyCodeDataGUID = '';
tWorkflowHiveData.prototype.PropertyCode = '';
tWorkflowHiveData.prototype.PropertyCodeDataGUID = '';
tWorkflowHiveData.prototype.PropertyCodeDescription = '';
tWorkflowHiveData.prototype.PropertyCodeValue = null;
tWorkflowHiveData.prototype.Tag = '';

function tWorkflowReportData() {
    var self = this;
}
tWorkflowReportData.prototype.Data = '';
tWorkflowReportData.prototype.DataGUID = '';
tWorkflowReportData.prototype.FieldID = null;
tWorkflowReportData.prototype.FieldType = '';
tWorkflowReportData.prototype.ParentReportID = null;
tWorkflowReportData.prototype.Question = '';
tWorkflowReportData.prototype.QuestionHelp = '';
tWorkflowReportData.prototype.ReportID = null;
tWorkflowReportData.prototype.ReportTypeName = '';
tWorkflowReportData.prototype.RequestID = null;
tWorkflowReportData.prototype.SectionID = null;
tWorkflowReportData.prototype.SectionName = '';

function tParameters_SearchRequest() {
    var self = this;
}
tParameters_SearchRequest.prototype.AGENT_ID = null;
tParameters_SearchRequest.prototype.APP_USER_ID = null;
tParameters_SearchRequest.prototype.BROKER_ID = null;
tParameters_SearchRequest.prototype.BusinessEntityCode = null;
tParameters_SearchRequest.prototype.CLI_REF_NO = null;
tParameters_SearchRequest.prototype.CAT_ID = null;
tParameters_SearchRequest.prototype.COMP_CLI_ID = null;
tParameters_SearchRequest.prototype.EFF_DATE = null;
tParameters_SearchRequest.prototype.FULL_NAME = null;
tParameters_SearchRequest.prototype.INCEP_DATE = null;
tParameters_SearchRequest.prototype.INSP_MUNICIPALITY = null;
tParameters_SearchRequest.prototype.INSP_POST_CD = null;
tParameters_SearchRequest.prototype.INSP_PROVINCE = null;
tParameters_SearchRequest.prototype.INSP_STREET_NAME = null;
tParameters_SearchRequest.prototype.INSP_STREET_NUMBER = null;
tParameters_SearchRequest.prototype.INSURED_NAME = null;
tParameters_SearchRequest.prototype.maxCLOSED_DATE = null;
tParameters_SearchRequest.prototype.maxCOVRG_A = null;
tParameters_SearchRequest.prototype.MaximumRows = null;
tParameters_SearchRequest.prototype.maxRECV_DATE = null;
tParameters_SearchRequest.prototype.maxRQST_DATE = null;
tParameters_SearchRequest.prototype.minCLOSED_DATE = null;
tParameters_SearchRequest.prototype.minCOVRG_A = null;
tParameters_SearchRequest.prototype.minRECV_DATE = null;
tParameters_SearchRequest.prototype.minRQST_DATE = null;
tParameters_SearchRequest.prototype.OFF_ID = null;
tParameters_SearchRequest.prototype.OFF_NAME = null;
tParameters_SearchRequest.prototype.POLICY_NO = null;
tParameters_SearchRequest.prototype.REP_TYPE_ID = null;
tParameters_SearchRequest.prototype.REQUESTOR_NAME = null;
tParameters_SearchRequest.prototype.RoleCode = null;
tParameters_SearchRequest.prototype.RowStartIndex = null;
tParameters_SearchRequest.prototype.RQST_CD = null;
tParameters_SearchRequest.prototype.RQST_ID = null;
tParameters_SearchRequest.prototype.ShowExpired = false;
tParameters_SearchRequest.prototype.STAT_CDs = null;
tParameters_SearchRequest.prototype.USER_GROUP = null;
tParameters_SearchRequest.prototype.Language = null;
tParameters_SearchRequest.prototype.minINSP_DATE = null;
tParameters_SearchRequest.prototype.maxINSP_DATE = null;
tParameters_SearchRequest.prototype.ADDRESS_DETAILS = null;
tParameters_SearchRequest.prototype.minIRC = null;
tParameters_SearchRequest.prototype.maxIRC = null;

function tWIESInspectionReportCategory() {
    var self = this;
}
tWIESInspectionReportCategory.prototype.CategoryID = null;
tWIESInspectionReportCategory.prototype.CategoryName = null;

function tWIESInspectionReportType() {
    var self = this;
}
tWIESInspectionReportType.prototype.ReportTypeID = null;
tWIESInspectionReportType.prototype.ReportTypeName = null;

function tInspector() {
    var self = this;
}
tInspector.prototype.InspectorID = null;
tInspector.prototype.InspectorName = null;

function tRequestSearchResult() {
    var self = this;
}
tRequestSearchResult.prototype.RequestID = null;
tRequestSearchResult.prototype.ParentRequestCode = null;
tRequestSearchResult.prototype.RequestCode = null;
tRequestSearchResult.prototype.StatusCode = null;
tRequestSearchResult.prototype.StatusDescription = null;
tRequestSearchResult.prototype.RequestDate = null;
tRequestSearchResult.prototype.ReceivedDate = null;
tRequestSearchResult.prototype.ClosedDate = null;
tRequestSearchResult.prototype.PolicyNumber = null;
tRequestSearchResult.prototype.Surname = null;
tRequestSearchResult.prototype.InspectionPostalCode = null;
tRequestSearchResult.prototype.ReportCategoryID = null;
tRequestSearchResult.prototype.ReportTypeID = null;
tRequestSearchResult.prototype.CoverageA = null;
tRequestSearchResult.prototype.BrokerID = null;
tRequestSearchResult.prototype.Value = false;
tRequestSearchResult.prototype.Recommendations = false;
tRequestSearchResult.prototype.ReportTypeNameEnglish = null;
tRequestSearchResult.prototype.ReportTypeNameFrench = null;
tRequestSearchResult.prototype.CanRecalc = null;
tRequestSearchResult.prototype.CanViewReport = null;
tRequestSearchResult.prototype.CanViewClientReport = null;
tRequestSearchResult.prototype.CanViewRCT = null;
tRequestSearchResult.prototype.UserGroup = null;
tRequestSearchResult.prototype.Zone = null;
tRequestSearchResult.prototype.InspectionStreetName = null;
tRequestSearchResult.prototype.InspectionStreetNumber = null;
tRequestSearchResult.prototype.InspectionProvince = null;
tRequestSearchResult.prototype.InspectionMunicipality = null;
tRequestSearchResult.prototype.RequestorName = null;
tRequestSearchResult.prototype.AgeOfFile = null;
tRequestSearchResult.prototype.Comments = null;
tRequestSearchResult.prototype.InsuredName = null;
tRequestSearchResult.prototype.RequestColourCode = null;
tRequestSearchResult.prototype.RMSReplacementCostValue = null;
tRequestSearchResult.prototype.Difference = null;
tRequestSearchResult.prototype.DifferenceColor = null;
tRequestSearchResult.prototype.DifferencePercentage = null;
tRequestSearchResult.prototype.SQFT = null;
tRequestSearchResult.prototype.BrokerName = null;
tRequestSearchResult.prototype.AltRowColor = false;
tRequestSearchResult.prototype.InspectionDate = null;
tRequestSearchResult.prototype.ReportDeliveredDate = null;
tRequestSearchResult.prototype.BusinessEntityCode = null;
tRequestSearchResult.prototype.RegionOfficeName = null;
tRequestSearchResult.prototype.ClientName = null;
tRequestSearchResult.prototype.ReportFriendlyName = null;
tRequestSearchResult.prototype.IsOracleRpt = null;
tRequestSearchResult.prototype.InspectorName = null;

function tInspectionRequest() {
    var self = this;
}
tInspectionRequest.prototype.ClientName = '';
tInspectionRequest.prototype.InspectionAddressStreetTypeRaw = '';
tInspectionRequest.prototype.InspectionAddressStreetDirectionRaw = '';
tInspectionRequest.prototype.MailingAddressStreetTypeRaw = '';
tInspectionRequest.prototype.MailingAddressStreetDirectionRaw = '';
tInspectionRequest.prototype.PolicyInformation = null;
tInspectionRequest.prototype.BundledRequestInformation = null;
tInspectionRequest.prototype.ReportType = null;
tInspectionRequest.prototype.ReportCategory = null;
tInspectionRequest.prototype.RequestCode = null;
tInspectionRequest.prototype.BrokerID = null;
tInspectionRequest.prototype.ActivationDate = null;
tInspectionRequest.prototype.RiskAddress = null;
tInspectionRequest.prototype.MailingAddress = null;
tInspectionRequest.prototype.RequestorEmail = '';
tInspectionRequest.prototype.RequestorName = '';
tInspectionRequest.prototype.AlternateEmail = '';
tInspectionRequest.prototype.HandlingInstructions = '';
tInspectionRequest.prototype.UnderwritingConcerns = null;
tInspectionRequest.prototype.Supplements = null;
tInspectionRequest.prototype.BrokerAddress = '';
tInspectionRequest.prototype.BrokerPhone = '';
tInspectionRequest.prototype.BrokerName = '';
tInspectionRequest.prototype.IBCCodeID = null;
tInspectionRequest.prototype.IBCCode = '';
tInspectionRequest.prototype.IBCCodeDescription = '';
tInspectionRequest.prototype.InspectionReasons = null;
tInspectionRequest.prototype.PropertyHazardCode = null;
tInspectionRequest.prototype.CrimeHazardCode = null;
tInspectionRequest.prototype.LiabilityHazardCode = null;
tInspectionRequest.prototype.Vehicle = null;

function tPolicyInformation() {
    var self = this;
}
tPolicyInformation.prototype.RenewalDate = null;
tPolicyInformation.prototype.PolicyNumber = '';
tPolicyInformation.prototype.AppointmentContacts = null;
tPolicyInformation.prototype.PolicyHolders = null;
tPolicyInformation.prototype.PolicyStatus = null;
tPolicyInformation.prototype.Coverages = null;
tPolicyInformation.prototype.CoverageType = null;
tPolicyInformation.prototype.InsuredType = null;

function tPolicyHolder() {
    var self = this;
}
tPolicyHolder.prototype.LastName = '';
tPolicyHolder.prototype.FirstName = '';
tPolicyHolder.prototype.HomeTelephone = '';
tPolicyHolder.prototype.BusinessTelephone = '';
tPolicyHolder.prototype.CellPhone = '';
tPolicyHolder.prototype.Comments = '';
tPolicyHolder.prototype.Email = '';
tPolicyHolder.prototype.IsBusiness = false;
tPolicyHolder.prototype.ContactType = null;
tPolicyHolder.prototype.BirthDate = null;

function tContactType() {
    var self = this;
}

function tCoverage() {
    var self = this;
}
tCoverage.prototype.CoverageType = null;
tCoverage.prototype.Amount = null;

function tCoverageTypes() {
    var self = this;
}

function tAddress() {
    var self = this;
}
tAddress.prototype.StreetNumber = '';
tAddress.prototype.StreetName = '';
tAddress.prototype.StreetDirection = null;
tAddress.prototype.StreetType = null;
tAddress.prototype.Province = null;
tAddress.prototype.PostalCode = '';
tAddress.prototype.Municipality = '';
tAddress.prototype.LegalDescription = '';
tAddress.prototype.Latitude = null;
tAddress.prototype.Longitude = null;
tAddress.prototype.IsRural = false;
tAddress.prototype.EmergencyLocationNumber = '';
tAddress.prototype.RuralRouteNumber = '';
tAddress.prototype.POBox = '';
tAddress.prototype.BoxRange = '';
tAddress.prototype.Lot = '';
tAddress.prototype.Concession = '';
tAddress.prototype.Township = '';
tAddress.prototype.Plan = '';
tAddress.prototype.Site = '';
tAddress.prototype.Block = '';
tAddress.prototype.Parcel = '';
tAddress.prototype.POType = '';
tAddress.prototype.Station = '';
tAddress.prototype.Other = '';

function tProvinces() {
    var self = this;
}

function tUnderwritingConcern() {
    var self = this;
}
tUnderwritingConcern.prototype.UnderwritingConcernID = null;
tUnderwritingConcern.prototype.Comment = '';
tUnderwritingConcern.prototype.UnderwritingConcernDescription = '';

function tSupplement() {
    var self = this;
}
tSupplement.prototype.SupplementType = null;
tSupplement.prototype.SupplementTypeString = '';
tSupplement.prototype.Quantity = null;

function tInspectionReasons() {
    var self = this;
}

function tVehicle() {
    var self = this;
}
tVehicle.prototype.Class = '';
tVehicle.prototype.Make = '';
tVehicle.prototype.Model = '';
tVehicle.prototype.Year = '';

function tWIESAttachment() {
    var self = this;
}
tWIESAttachment.prototype.AttachID = null;
tWIESAttachment.prototype.AttachmentName = '';
tWIESAttachment.prototype.Rqst_Attachment = null;

function tLanguages() {
    var self = this;
}

function tSearchParameter_Contract() {
    var self = this;
}
tSearchParameter_Contract.prototype.PageIndex = null;
tSearchParameter_Contract.prototype.Language = null;
tSearchParameter_Contract.prototype.ContractShortName = '';
tSearchParameter_Contract.prototype.ClientAccountName = '';
tSearchParameter_Contract.prototype.PageResultCount = null;
tSearchParameter_Contract.prototype.ContractGUID = '';
tSearchParameter_Contract.prototype.ClientAccountGUID = '';
tSearchParameter_Contract.prototype.ClientGroupGUID = '';
tSearchParameter_Contract.prototype.ContractFullName = '';
tSearchParameter_Contract.prototype.ValidDate = null;
tSearchParameter_Contract.prototype.ActiveOnly = null;
tSearchParameter_Contract.prototype.RMSAccountCode = '';

function tContractProduct() {
    var self = this;
}
tContractProduct.prototype.ContractGUID = '';
tContractProduct.prototype.ProductGUID = '';
tContractProduct.prototype.ContractProductGUID = '';
tContractProduct.prototype.ActivityDate = null;
tContractProduct.prototype.EndDate = null;
tContractProduct.prototype.StartDate = null;
tContractProduct.prototype.Active = false;

function tSearchParameter_ContractContact() {
    var self = this;
}
tSearchParameter_ContractContact.prototype.PageResultCount = null;
tSearchParameter_ContractContact.prototype.ContractShortName = '';
tSearchParameter_ContractContact.prototype.FirstName = '';
tSearchParameter_ContractContact.prototype.ClientAccountName = '';
tSearchParameter_ContractContact.prototype.LastName = '';
tSearchParameter_ContractContact.prototype.RMSAccountCode = '';
tSearchParameter_ContractContact.prototype.ActiveOnly = null;
tSearchParameter_ContractContact.prototype.LoginGUID = '';
tSearchParameter_ContractContact.prototype.Language = null;
tSearchParameter_ContractContact.prototype.ContractContactGUID = '';
tSearchParameter_ContractContact.prototype.PageIndex = null;
tSearchParameter_ContractContact.prototype.ContractFullName = '';
tSearchParameter_ContractContact.prototype.ContactGUID = '';
tSearchParameter_ContractContact.prototype.ContractGUID = '';
tSearchParameter_ContractContact.prototype.MiddleName = '';
tSearchParameter_ContractContact.prototype.ClientGroupGUID = '';
tSearchParameter_ContractContact.prototype.ClientAccountGUID = '';

function tContractContact() {
    var self = this;
}
tContractContact.prototype.Active = false;
tContractContact.prototype.ContractContactGUID = '';
tContractContact.prototype.ActivityDate = null;
tContractContact.prototype.ContactGUID = '';
tContractContact.prototype.ContractGUID = '';

function tContact() {
    var self = this;
}
tContact.prototype.ActivityDate = null;
tContact.prototype.LoginGUID = '';
tContact.prototype.LastName = '';
tContact.prototype.Active = false;
tContact.prototype.FirstName = '';
tContact.prototype.MiddleName = '';
tContact.prototype.ContactGUID = '';

function tSearchParameter_Contact() {
    var self = this;
}
tSearchParameter_Contact.prototype.LoginGUID = '';
tSearchParameter_Contact.prototype.PageResultCount = null;
tSearchParameter_Contact.prototype.ActiveOnly = null;
tSearchParameter_Contact.prototype.PageIndex = null;
tSearchParameter_Contact.prototype.FirstName = '';
tSearchParameter_Contact.prototype.ContactGUID = '';
tSearchParameter_Contact.prototype.MiddleName = '';
tSearchParameter_Contact.prototype.LastName = '';

function tContract() {
    var self = this;
}
tContract.prototype.SCMSubAccountCode = '';
tContract.prototype.RMSAccountCode = '';
tContract.prototype.Language = null;
tContract.prototype.ActivityDate = null;
tContract.prototype.ContractInstructions = '';
tContract.prototype.ClientAccountGUID = '';
tContract.prototype.StartDate = null;
tContract.prototype.Active = false;
tContract.prototype.ContractFullName = '';
tContract.prototype.EndDate = null;
tContract.prototype.ContractGUID = '';
tContract.prototype.SCMAccountCode = '';
tContract.prototype.SCMGroupCode = '';
tContract.prototype.ContractShortName = '';

function tSearchParameter_Product() {
    var self = this;
}
tSearchParameter_Product.prototype.ProductLineCode = '';
tSearchParameter_Product.prototype.ProductLineType = '';
tSearchParameter_Product.prototype.ReportCategoryCode = '';
tSearchParameter_Product.prototype.BusinessSectorType = '';
tSearchParameter_Product.prototype.Language = null;
tSearchParameter_Product.prototype.ProductClassCode = '';
tSearchParameter_Product.prototype.BusinessSectorCode = '';
tSearchParameter_Product.prototype.ActiveOnly = null;
tSearchParameter_Product.prototype.ProductTypeCode = '';
tSearchParameter_Product.prototype.BusinessLineType = '';
tSearchParameter_Product.prototype.PageIndex = null;
tSearchParameter_Product.prototype.ProductText = '';
tSearchParameter_Product.prototype.ProductClassType = '';
tSearchParameter_Product.prototype.PageResultCount = null;
tSearchParameter_Product.prototype.ProductTypeType = '';
tSearchParameter_Product.prototype.ReportCategoryType = '';
tSearchParameter_Product.prototype.ProductGUID = '';
tSearchParameter_Product.prototype.BusinessLineCode = '';

function tSearchParameter_ContractProduct() {
    var self = this;
}
tSearchParameter_ContractProduct.prototype.ValidDate = null;
tSearchParameter_ContractProduct.prototype.ContractGUID = '';
tSearchParameter_ContractProduct.prototype.Language = null;
tSearchParameter_ContractProduct.prototype.BusinessSectorCode = '';
tSearchParameter_ContractProduct.prototype.ActiveOnly = null;
tSearchParameter_ContractProduct.prototype.ContractProductGUID = '';
tSearchParameter_ContractProduct.prototype.BusinessLineType = '';
tSearchParameter_ContractProduct.prototype.PageResultCount = null;
tSearchParameter_ContractProduct.prototype.ProductClassType = '';
tSearchParameter_ContractProduct.prototype.ReportCategoryCode = '';
tSearchParameter_ContractProduct.prototype.ReportCategoryType = '';
tSearchParameter_ContractProduct.prototype.PageIndex = null;
tSearchParameter_ContractProduct.prototype.ClientAccountName = '';
tSearchParameter_ContractProduct.prototype.ClientAccountGUID = '';
tSearchParameter_ContractProduct.prototype.ContractFullName = '';
tSearchParameter_ContractProduct.prototype.ProductGUID = '';
tSearchParameter_ContractProduct.prototype.ProductText = '';
tSearchParameter_ContractProduct.prototype.ProductLineType = '';
tSearchParameter_ContractProduct.prototype.ProductTypeType = '';
tSearchParameter_ContractProduct.prototype.ProductTypeCode = '';
tSearchParameter_ContractProduct.prototype.ContractShortName = '';
tSearchParameter_ContractProduct.prototype.ProductLineCode = '';
tSearchParameter_ContractProduct.prototype.BusinessLineCode = '';
tSearchParameter_ContractProduct.prototype.ClientGroupGUID = '';
tSearchParameter_ContractProduct.prototype.ProductClassCode = '';
tSearchParameter_ContractProduct.prototype.BusinessSectorType = '';
tSearchParameter_ContractProduct.prototype.RMSAccountCode = '';
angular.module('officeLinkProxyModule', []).service('officeLinkProxyService', function ($http) {
    this.oContractProducts_Delete = function (ContractProductGUID, onSuccess, onError) {
        $http({
            method: 'DELETE',
            url: OfficeLinkApiUrl + 'ContractProducts/' + ContractProductGUID + ''
        }).success(onSuccess).error(onError);
    }
    this.oFailReview = function (input, onSuccess, onError) {
        $http({
            method: 'POST',
            url: OfficeLinkApiUrl + 'WIES/QA/Fail',
            headers: {
                'Content-Type': 'application/json'
            },
            data: input
        }).success(onSuccess).error(onError);
    }
    this.oPassReview = function (input, onSuccess, onError) {
        $http({
            method: 'POST',
            url: OfficeLinkApiUrl + 'WIES/QA/Pass',
            headers: {
                'Content-Type': 'application/json'
            },
            data: input
        }).success(onSuccess).error(onError);
    }
    this.oSaveReviewComment = function (input, onSuccess, onError) {
        $http({
            method: 'POST',
            url: OfficeLinkApiUrl + 'WIES/QA/ReviewComment',
            headers: {
                'Content-Type': 'application/json'
            },
            data: input
        }).success(onSuccess).error(onError);
    }
    this.oGetReviewComment = function (RequestID, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'WIES/QA/ReviewComment?RequestID=' + RequestID + ''
        }).success(onSuccess).error(onError);
    }
    this.oGetInspectorComment = function (RequestID, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'WIES/QA/InspectorComment?RequestID=' + RequestID + ''
        }).success(onSuccess).error(onError);
    }
    this.oLockInspection = function (input, onSuccess, onError) {
        $http({
            method: 'POST',
            url: OfficeLinkApiUrl + 'WIES/QA/LockInspection',
            headers: {
                'Content-Type': 'application/json'
            },
            data: input
        }).success(onSuccess).error(onError);
    }
    this.oRefreshInspectionLock = function (input, onSuccess, onError) {
        $http({
            method: 'POST',
            url: OfficeLinkApiUrl + 'WIES/QA/RefreshInspectionLock',
            headers: {
                'Content-Type': 'application/json'
            },
            data: input
        }).success(onSuccess).error(onError);
    }
    this.oUnlockInspection = function (input, onSuccess, onError) {
        $http({
            method: 'POST',
            url: OfficeLinkApiUrl + 'WIES/QA/UnlockInspection',
            headers: {
                'Content-Type': 'application/json'
            },
            data: input
        }).success(onSuccess).error(onError);
    }
    this.oGetHiveAdjustmentReasonData = function (RequestID, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'WIES/HiveAdjustmentReasonData?RequestID=' + RequestID + ''
        }).success(onSuccess).error(onError);
    }
    this.oGetHiveAdjustmentReasons = function (onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'WIES/HiveAdjustmentReason'
        }).success(onSuccess).error(onError);
    }
    this.oSaveHiveAdjustmentReasonData = function (input, onSuccess, onError) {
        $http({
            method: 'POST',
            url: OfficeLinkApiUrl + 'WIES/HiveAdjustmentReasonData',
            headers: {
                'Content-Type': 'application/json'
            },
            data: input
        }).success(onSuccess).error(onError);
    }
    this.oGetHiveData = function (RequestID, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'WIES/HiveData?RequestID=' + RequestID + ''
        }).success(onSuccess).error(onError);
    }
    this.oSaveHiveData = function (input, onSuccess, onError) {
        $http({
            method: 'POST',
            url: OfficeLinkApiUrl + 'WIES/HiveData',
            headers: {
                'Content-Type': 'application/json'
            },
            data: input
        }).success(onSuccess).error(onError);
    }
    this.oGetReportCategoryList = function (Language, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'WIES/Lookups/ReportCategories?Language=' + Language + ''
        }).success(onSuccess).error(onError);
    }
    this.oGetReportTypeByCategory = function (ReportCategoryID, Language, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'WIES/Lookups/ReportTypeByCategory?CategoryID=' + ReportCategoryID + '&Language=' + Language + ''
        }).success(onSuccess).error(onError);
    }
    this.oGetReportCategorySupplementTypes = function (ReportCategoryID, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'WIES/Lookups/ReportCategorySupplementTypes?ReportCategoryID=' + ReportCategoryID + ''
        }).success(onSuccess).error(onError);
    }
    this.oGetInspectionReasons = function (onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'WIES/Lookups/InspectionReasons'
        }).success(onSuccess).error(onError);
    }
    this.oSearchIBCCodes = function (IBCCodeContains, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'WIES/Lookups/IBCCodes?IBCCodeContains=' + IBCCodeContains + ''
        }).success(onSuccess).error(onError);
    }
    this.oGetReportTextData = function (RequestID, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'WIES/Reports/ReportTextData?RequestID=' + RequestID + ''
        }).success(onSuccess).error(onError);
    }
    this.oGetReportAlerts = function (RequestID, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'WIES/Reports/ReportAlerts?RequestID=' + RequestID + ''
        }).success(onSuccess).error(onError);
    }
    this.oCalculate = function (input, onSuccess, onError) {
        $http({
            method: 'POST',
            url: OfficeLinkApiUrl + 'WIES/Reports/Calculate?RequestID={RequestID}',
            headers: {
                'Content-Type': 'application/json'
            },
            data: input
        }).success(onSuccess).error(onError);
    }
    this.oGetInspector = function (Email, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'WIES/Reports/Inspectors?Email=' + Email + ''
        }).success(onSuccess).error(onError);
    }
    this.oQAGetInspector = function (Email, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'WIES/QA/InspectorsByEmail?Email=' + Email + ''
        }).success(onSuccess).error(onError);
    }
    this.oSaveReportData = function (input, LockGUID, onSuccess, onError) {
        $http({
            method: 'POST',
            url: OfficeLinkApiUrl + 'WIES/Reports/ReportData?LockGUID=' + LockGUID + '',
            headers: {
                'Content-Type': 'application/json'
            },
            data: input
        }).success(onSuccess).error(onError);
    }
    this.oCacheReport = function (input, onSuccess, onError) {
        $http({
            method: 'POST',
            url: OfficeLinkApiUrl + 'WIES/Reports/CacheReport?RequestID={RequestID}',
            headers: {
                'Content-Type': 'application/json'
            },
            data: input
        }).success(onSuccess).error(onError);
    }
    this.oSearchRequest = function (input, onSuccess, onError) {
        $http({
            method: 'POST',
            url: OfficeLinkApiUrl + 'WIES/SearchRequests',
            headers: {
                'Content-Type': 'application/json'
            },
            data: input
        }).success(onSuccess).error(onError);
    }
    this.oSubmitRequest = function (input, onSuccess, onError) {
        $http({
            method: 'POST',
            url: OfficeLinkApiUrl + 'WIES/Requests',
            headers: {
                'Content-Type': 'application/json'
            },
            data: input
        }).success(onSuccess).error(onError);
    }
    this.oViewInspectionReasons = function (RequestID, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'WIES/InspectionReasons?RequestID=' + RequestID + ''
        }).success(onSuccess).error(onError);
    }
    this.oSaveAttachment = function (input, onSuccess, onError) {
        $http({
            method: 'POST',
            url: OfficeLinkApiUrl + 'WIES/RequestAttachments',
            headers: {
                'Content-Type': 'application/json'
            },
            data: input
        }).success(onSuccess).error(onError);
    }
    this.oGetRecentSearchHistory = function (Language, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'WIES/SearchHistory?Language=' + Language + ''
        }).success(onSuccess).error(onError);
    }
    this.oContracts_Get = function (ContractGUID, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'Contracts/' + ContractGUID + ''
        }).success(onSuccess).error(onError);
    }
    this.oContracts_Search = function (input, onSuccess, onError) {
        $http({
            method: 'POST',
            url: OfficeLinkApiUrl + 'Contracts/Search',
            headers: {
                'Content-Type': 'application/json'
            },
            data: input
        }).success(onSuccess).error(onError);
    }
    this.oContractProducts_Search = function (input, onSuccess, onError) {
        $http({
            method: 'POST',
            url: OfficeLinkApiUrl + 'api/ContractProducts',
            headers: {
                'Content-Type': 'application/json'
            },
            data: input
        }).success(onSuccess).error(onError);
    }
    this.oContractContacts_Search = function (input, onSuccess, onError) {
        $http({
            method: 'POST',
            url: OfficeLinkApiUrl + 'api/SearchContractContacts',
            headers: {
                'Content-Type': 'application/json'
            },
            data: input
        }).success(onSuccess).error(onError);
    }
    this.POST_ContractContacts = function (input, onSuccess, onError) {
        $http({
            method: 'POST',
            url: OfficeLinkApiUrl + 'api/ContractContacts',
            headers: {
                'Content-Type': 'application/json'
            },
            data: input
        }).success(onSuccess).error(onError);
    }
    this.GET_Contacts = function (ContactGUID, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'api/Contacts?ContactGUID=' + ContactGUID + ''
        }).success(onSuccess).error(onError);
    }
    this.POST_Contacts = function (input, onSuccess, onError) {
        $http({
            method: 'POST',
            url: OfficeLinkApiUrl + 'api/Contacts',
            headers: {
                'Content-Type': 'application/json'
            },
            data: input
        }).success(onSuccess).error(onError);
    }
    this.oContacts_Search = function (input, onSuccess, onError) {
        $http({
            method: 'POST',
            url: OfficeLinkApiUrl + 'api/SearchContacts',
            headers: {
                'Content-Type': 'application/json'
            },
            data: input
        }).success(onSuccess).error(onError);
    }
    this.oContracts_Save = function (input, onSuccess, onError) {
        $http({
            method: 'POST',
            url: OfficeLinkApiUrl + 'api/Contracts',
            headers: {
                'Content-Type': 'application/json'
            },
            data: input
        }).success(onSuccess).error(onError);
    }
    this.oProducts_Search = function (input, onSuccess, onError) {
        $http({
            method: 'POST',
            url: OfficeLinkApiUrl + 'api/SearchProducts',
            headers: {
                'Content-Type': 'application/json'
            },
            data: input
        }).success(onSuccess).error(onError);
    }
    this.oContractProducts_Search = function (input, onSuccess, onError) {
        $http({
            method: 'POST',
            url: OfficeLinkApiUrl + 'api/SearchContractProducts',
            headers: {
                'Content-Type': 'application/json'
            },
            data: input
        }).success(onSuccess).error(onError);
    }
    this.oReopenRequest = function (RequestID, Reason, onSuccess, onError) {
        $http({
            method: 'POST',
            url: OfficeLinkApiUrl + 'WIES/QA/ReOpenRequest?RequestID=' + RequestID + '&Reason=' + Reason + '',
            headers: {
                'Content-Type': 'application/json'
            }          
        }).success(onSuccess).error(onError);
    }
    this.oDeactivateRequest = function (RequestID, Reason, onSuccess, onError) {
        $http({
            method: 'POST',
            url: OfficeLinkApiUrl + 'WIES/Requests/Deactivate?RequestID=' + RequestID + '&Reason=' + Reason + '',
            headers: {
                'Content-Type': 'application/json'
            }
        }).success(onSuccess).error(onError);
    }
    this.oReassignReportTypeList = function (RequestID, CategoryID, Language, onSuccess, onError) { 
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'WIES/QA/ReassignReportTypes?RequestID=' + RequestID + '&CategoryID=' + CategoryID + '&Language=' + Language + ''
        }).success(onSuccess).error(onError);
    }
    this.oReassignReportType = function (RequestID, ReportTypeID, Comment, onSuccess, onError) {
        $http({
            method: 'POST',
            url: OfficeLinkApiUrl + 'WIES/QA/ReAssignReportType?RequestID=' + RequestID + '&ReportTypeID=' + ReportTypeID + '&Comment=' + Comment + '',
            headers: {
                'Content-Type': 'application/json'
            }
        }).success(onSuccess).error(onError);
    }
    this.oReassignInspectorList = function (onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'WIES/QA/Inspectors'
        }).success(onSuccess).error(onError);
    }
    this.oReassignInspector = function (RequestID, InspectorID, Comment, onSuccess, onError) {
        $http({
            method: 'POST',
            url: OfficeLinkApiUrl + 'WIES/QA/ReAssignInspector?RequestID=' + RequestID + '&InspectorID=' + InspectorID + '&Comment=' + Comment + '',
            headers: {
                'Content-Type': 'application/json'
            }
        }).success(onSuccess).error(onError);
    }
    this.oCalculateITV = function (RequestID, onSuccess, onError) {
        $http({
            method: 'POST',
            url: OfficeLinkApiUrl + 'WIES/Reports/Calculate?RequestID=' + RequestID + '',
            headers: {
                'Content-Type': 'application/json'
            }
        }).success(onSuccess).error(onError);
    }
    this.oViewRequest = function (RequestID, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'WIES/Requests?RequestID=' + RequestID + ''
        }).success(onSuccess).error(onError);
    }
    this.oViewAttachments = function (RequestID, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'WIES/RequestAttachments?RequestID=' + RequestID + ''
        }).success(onSuccess).error(onError);
    }
    this.oGetAttachment = function (AttachmentName, RequestId, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'WIES/RequestAttachment?AttachmentName=' + AttachmentName + '&RequestId=' + RequestId + ''
        }).success(onSuccess).error(onError);
    }
    this.oGetDeliveryOption = function (RequestID, Language, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'WIES/RequestDeliveryOptions?RequestID=' + RequestID + '&Language=' + Language + ''
        }).success(onSuccess).error(onError);
    }
    this.oGetSearchReportTypeListByCategory = function (CategoryID, Language, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'WIES/Lookups/ReportTypeByCategory?CategoryID=' + CategoryID + '&Language=' + Language + ''
        }).success(onSuccess).error(onError);
    }
    this.oGetAuditComment = function (RequestID, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'WIES/QA/AuditComment?RequestID=' + RequestID + ''
        }).success(onSuccess).error(onError);
    }
    this.oGetHandlingInstruction = function (RequestID, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'WIES/QAHandlingInstruction?RequestID=' + RequestID + ''
        }).success(onSuccess).error(onError);
    }
    this.oGetHiveRunComment = function (input, onSuccess, onError) {
        $http({
            method: 'POST',
            url: OfficeLinkApiUrl + 'WIES/HiveRunComment',
            headers: {
                'Content-Type': 'application/json'
            },
            data: input
        }).success(onSuccess).error(onError);
    }
    this.oSaveHiveRunComment = function (RequestID, Comments, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'WIES/HiveRunComment?RequestID=' + RequestID + '&Comments=' + Comments + ''
        }).success(onSuccess).error(onError);
    }
    this.oGetInspectionReport = function (TrackingCode, Language, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'Documents/InspectionReport?TrackingCode=' + TrackingCode + '&Language=' + Language + ''
        }).success(onSuccess).error(onError);
    }
    this.oGetCustomerReport = function (TrackingCode, Language, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'Documents/CustomerReport?TrackingCode=' + TrackingCode + '&Language=' + Language + ''
        }).success(onSuccess).error(onError);
    }
    this.oGetPreciseReport = function (TrackingCode, Language, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'Documents/PreciseReport?TrackingCode=' + TrackingCode + '&Language=' + Language + ''
        }).success(onSuccess).error(onError);
    }
    this.oGetTicketReport = function (TrackingCode, Language, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'Documents/TicketReport?TrackingCode=' + TrackingCode + '&Language=' + Language + ''
        }).success(onSuccess).error(onError);
    }
    this.oGetRecommendationReport = function (TrackingCode, Language, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'Documents/RecommendationReport?TrackingCode=' + TrackingCode + '&Language=' + Language + ''
        }).success(onSuccess).error(onError);
    }
    this.oGetIRCReport = function (TrackingCode, Language, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'Documents/IRCReport?TrackingCode=' + TrackingCode + '&Language=' + Language + ''
        }).success(onSuccess).error(onError);
    }
    this.oGetHiveAdjustmentReasonData = function (RequestID, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'WIES/HiveAdjustmentReasonData?RequestID=' + RequestID + ''
        }).success(onSuccess).error(onError);
    }
    this.oSearchRequestSpreadsheet = function (input, onSuccess, onError) {
        $http({
            method: 'POST',
            url: OfficeLinkApiUrl + 'Documents/SearchRequestSpreadsheet',
            headers: {
                'Content-Type': 'application/json'
            },
            data: input
        }).success(onSuccess).error(onError);
    }
    this.oGetHiveRuns = function (RequestID, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'WIES/HiveRuns?RequestID=' + RequestID + ''
        }).success(onSuccess).error(onError);
    }
    this.oGetHiveDataByRunID = function (HiveRunID, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'WIES/HiveData/ByRunID?HiveRunID=' + HiveRunID + ''
        }).success(onSuccess).error(onError);
    }
    this.oGetAltPresentationBanners = function (Language, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'WIES/Lookups/HiveAltPresentationBanners?Language=' + Language + ''
        }).success(onSuccess).error(onError);
    }
    this.oGetAltPresentationSections = function (BannerCode, Language, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'WIES/Lookups/HiveAltPresentationBannerSections?BannerCode=' + BannerCode + '&Language=' + Language + ''
        }).success(onSuccess).error(onError);
    }
    this.oGetAltPresentationSectionItems = function (BannerCode, Language, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'WIES/Lookups/HiveAltPresentationBannerSectionItems?BannerCode=' + BannerCode + '&Language=' + Language + ''
        }).success(onSuccess).error(onError);
    }
    this.oGetAltPresentationUnitTypes = function (Language, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'WIES/Lookups/HiveAltPresentationUnitTypes?Language=' + Language + ''
        }).success(onSuccess).error(onError);
    }
    this.oGetAltPresentationData = function (RequestID, onSuccess, onError) {
        $http({
            method: 'GET',
            url: OfficeLinkApiUrl + 'WIES/HiveAltPresentationData?RequestID=' + RequestID + ''
        }).success(onSuccess).error(onError);
    }
    this.oSaveAltPresentationData = function (input, onSuccess, onError) {
        $http({
            method: 'POST',
            url: OfficeLinkApiUrl + 'WIES/HiveAltPresentationData',
            headers: {
                'Content-Type': 'application/json'
            },
            data: input
        }).success(onSuccess).error(onError);
    }
    this.oSecondaryReview = function (RequestID, onSuccess, onError) {
        $http({
            method: 'POST',
            url: OfficeLinkApiUrl + 'WIES/QA/SecondaryReview?RequestID=' + RequestID + '',
            headers: {
                'Content-Type': 'application/json'
            }
        }).success(function (data) {
            onSuccess(data);
        }).error(onError);
    }
});