# MellovApi.CORSApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**notesNoteIdOptions**](CORSApi.md#notesNoteIdOptions) | **OPTIONS** /notes/{noteId} | CORS support
[**notesOptions**](CORSApi.md#notesOptions) | **OPTIONS** /notes | CORS support
[**songsOptions**](CORSApi.md#songsOptions) | **OPTIONS** /songs | CORS support
[**songsSongIdOptions**](CORSApi.md#songsSongIdOptions) | **OPTIONS** /songs/{songId} | CORS support
[**tagsOptions**](CORSApi.md#tagsOptions) | **OPTIONS** /tags | CORS support
[**tagsTagIdOptions**](CORSApi.md#tagsTagIdOptions) | **OPTIONS** /tags/{tagId} | CORS support
[**ytItemsOptions**](CORSApi.md#ytItemsOptions) | **OPTIONS** /yt-items | CORS support



## notesNoteIdOptions

> notesNoteIdOptions(noteId)

CORS support

Enable CORS by returning correct headers 

### Example

```javascript
import MellovApi from 'mellov_api';

let apiInstance = new MellovApi.CORSApi();
let noteId = "noteId_example"; // String | The note Id
apiInstance.notesNoteIdOptions(noteId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noteId** | **String**| The note Id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## notesOptions

> notesOptions()

CORS support

Enable CORS by returning correct headers 

### Example

```javascript
import MellovApi from 'mellov_api';

let apiInstance = new MellovApi.CORSApi();
apiInstance.notesOptions().then(() => {
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


## songsSongIdOptions

> songsSongIdOptions(songId)

CORS support

Enable CORS by returning correct headers 

### Example

```javascript
import MellovApi from 'mellov_api';

let apiInstance = new MellovApi.CORSApi();
let songId = "songId_example"; // String | The song Id
apiInstance.songsSongIdOptions(songId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **songId** | **String**| The song Id | 

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


## tagsTagIdOptions

> tagsTagIdOptions(tagId)

CORS support

Enable CORS by returning correct headers 

### Example

```javascript
import MellovApi from 'mellov_api';

let apiInstance = new MellovApi.CORSApi();
let tagId = "tagId_example"; // String | The tag Id
apiInstance.tagsTagIdOptions(tagId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| The tag Id | 

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

