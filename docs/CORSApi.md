# MellovApi.CORSApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**songsOptions**](CORSApi.md#songsOptions) | **OPTIONS** /songs | CORS support
[**tagsOptions**](CORSApi.md#tagsOptions) | **OPTIONS** /tags | CORS support
[**ytItemsOptions**](CORSApi.md#ytItemsOptions) | **OPTIONS** /yt-items | CORS support



## songsOptions

> songsOptions()

CORS support

Enable CORS by returning correct headers 

### Example

```javascript
import MellovApi from 'mellov_api';

let apiInstance = new MellovApi.CORSApi();
apiInstance.songsOptions().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## tagsOptions

> tagsOptions()

CORS support

Enable CORS by returning correct headers 

### Example

```javascript
import MellovApi from 'mellov_api';

let apiInstance = new MellovApi.CORSApi();
apiInstance.tagsOptions().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## ytItemsOptions

> ytItemsOptions()

CORS support

Enable CORS by returning correct headers 

### Example

```javascript
import MellovApi from 'mellov_api';

let apiInstance = new MellovApi.CORSApi();
apiInstance.ytItemsOptions().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

