# MellovApi.UsersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNote**](UsersApi.md#addNote) | **POST** /notes | Add note
[**addSong**](UsersApi.md#addSong) | **POST** /songs | Add song
[**deleteNote**](UsersApi.md#deleteNote) | **DELETE** /notes/{noteId} | Delete note
[**deleteSong**](UsersApi.md#deleteSong) | **DELETE** /songs/{songId} | Delete song
[**searchNote**](UsersApi.md#searchNote) | **GET** /notes/{noteId} | Search note
[**searchNotes**](UsersApi.md#searchNotes) | **GET** /notes | Search notes
[**searchSongs**](UsersApi.md#searchSongs) | **GET** /songs | Search songs
[**searchTags**](UsersApi.md#searchTags) | **GET** /tags | Search tags
[**searchYtItems**](UsersApi.md#searchYtItems) | **GET** /yt-items | Search yt items
[**updateNote**](UsersApi.md#updateNote) | **PUT** /notes/{noteId} | Update note
[**updateSong**](UsersApi.md#updateSong) | **PUT** /songs/{songId} | Update song



## addNote

> ItemCreated addNote(noteItem)

Add note

Add note

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
let noteItem = new MellovApi.NoteItem(); // NoteItem | Note to add
apiInstance.addNote(noteItem).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noteItem** | [**NoteItem**](NoteItem.md)| Note to add | 

### Return type

[**ItemCreated**](ItemCreated.md)

### Authorization

[MellovAuthorizer](../README.md#MellovAuthorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addSong

> ItemCreated addSong(songItem)

Add song

Add song

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
let songItem = new MellovApi.SongItem(); // SongItem | Song to add
apiInstance.addSong(songItem).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **songItem** | [**SongItem**](SongItem.md)| Song to add | 

### Return type

[**ItemCreated**](ItemCreated.md)

### Authorization

[MellovAuthorizer](../README.md#MellovAuthorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteNote

> deleteNote(noteId)

Delete note

Delete note

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
let noteId = "noteId_example"; // String | The note Id
apiInstance.deleteNote(noteId).then(() => {
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

[MellovAuthorizer](../README.md#MellovAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteSong

> deleteSong(songId)

Delete song

Delete song

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
let songId = "songId_example"; // String | The song Id
apiInstance.deleteSong(songId).then(() => {
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

[MellovAuthorizer](../README.md#MellovAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## searchNote

> NoteItem searchNote(noteId)

Search note

Find note

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
let noteId = "noteId_example"; // String | The note Id
apiInstance.searchNote(noteId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noteId** | **String**| The note Id | 

### Return type

[**NoteItem**](NoteItem.md)

### Authorization

[MellovAuthorizer](../README.md#MellovAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchNotes

> [NoteItem] searchNotes(opts)

Search notes

Find notes

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
apiInstance.searchNotes(opts).then((data) => {
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

[**[NoteItem]**](NoteItem.md)

### Authorization

[MellovAuthorizer](../README.md#MellovAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


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


## updateNote

> updateNote(noteId, noteItem)

Update note

Update note

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
let noteId = "noteId_example"; // String | The note Id
let noteItem = new MellovApi.NoteItem(); // NoteItem | Note to add
apiInstance.updateNote(noteId, noteItem).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noteId** | **String**| The note Id | 
 **noteItem** | [**NoteItem**](NoteItem.md)| Note to add | 

### Return type

null (empty response body)

### Authorization

[MellovAuthorizer](../README.md#MellovAuthorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## updateSong

> SongItem updateSong(songId, songItem)

Update song

Update song

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
let songId = "songId_example"; // String | The song Id
let songItem = new MellovApi.SongItem(); // SongItem | Song to update
apiInstance.updateSong(songId, songItem).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **songId** | **String**| The song Id | 
 **songItem** | [**SongItem**](SongItem.md)| Song to update | 

### Return type

[**SongItem**](SongItem.md)

### Authorization

[MellovAuthorizer](../README.md#MellovAuthorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

