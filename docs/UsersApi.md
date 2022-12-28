# MellovApi.UsersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchSongs**](UsersApi.md#searchSongs) | **GET** /songs | Search songs
[**searchTags**](UsersApi.md#searchTags) | **GET** /tags | Search tags
[**searchYtItems**](UsersApi.md#searchYtItems) | **GET** /yt-items | Search yt items



## searchSongs

> [SongItem] searchSongs(opts)

Search songs

Find songs

### Example

```javascript
import MellovApi from 'mellov_api';
let defaultClient = MellovApi.ApiClient.instance;
// Configure API key authorization: MellovAuthorizer
let MellovAuthorizer = defaultClient.authentications['MellovAuthorizer'];
MellovAuthorizer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//MellovAuthorizer.apiKeyPrefix = 'Token';

let apiInstance = new MellovApi.UsersApi();
let opts = {
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56, // Number | maximum number of records to return
  'title': "title_example", // String | a phrase song's title must contain
  'tags': ["null"], // [String] | tags which song must contain
  'sort': "sort_example" // String | type of sort to use
};
apiInstance.searchSongs(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 
 **title** | **String**| a phrase song&#39;s title must contain | [optional] 
 **tags** | [**[String]**](String.md)| tags which song must contain | [optional] 
 **sort** | **String**| type of sort to use | [optional] 

### Return type

[**[SongItem]**](SongItem.md)

### Authorization

[MellovAuthorizer](../README.md#MellovAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchTags

> [TagItem] searchTags(opts)

Search tags

Find tags

### Example

```javascript
import MellovApi from 'mellov_api';
let defaultClient = MellovApi.ApiClient.instance;
// Configure API key authorization: MellovAuthorizer
let MellovAuthorizer = defaultClient.authentications['MellovAuthorizer'];
MellovAuthorizer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//MellovAuthorizer.apiKeyPrefix = 'Token';

let apiInstance = new MellovApi.UsersApi();
let opts = {
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};
apiInstance.searchTags(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[TagItem]**](TagItem.md)

### Authorization

[MellovAuthorizer](../README.md#MellovAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchYtItems

> [YtVideoItem] searchYtItems(title, opts)

Search yt items

Find yt items

### Example

```javascript
import MellovApi from 'mellov_api';
let defaultClient = MellovApi.ApiClient.instance;
// Configure API key authorization: MellovAuthorizer
let MellovAuthorizer = defaultClient.authentications['MellovAuthorizer'];
MellovAuthorizer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//MellovAuthorizer.apiKeyPrefix = 'Token';

let apiInstance = new MellovApi.UsersApi();
let title = "title_example"; // String | title to search
let opts = {
  'limit': 56 // Number | maximum number of records to return
};
apiInstance.searchYtItems(title, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **title** | **String**| title to search | 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[YtVideoItem]**](YtVideoItem.md)

### Authorization

[MellovAuthorizer](../README.md#MellovAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

