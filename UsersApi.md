# .UsersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNote**](UsersApi.md#addNote) | **POST** /notes | Add note
[**addSong**](UsersApi.md#addSong) | **POST** /songs | Add song
[**addTag**](UsersApi.md#addTag) | **POST** /tags | Add tag
[**deleteNote**](UsersApi.md#deleteNote) | **DELETE** /notes/{noteId} | Delete note
[**deleteSong**](UsersApi.md#deleteSong) | **DELETE** /songs/{songId} | Delete song
[**deleteTag**](UsersApi.md#deleteTag) | **DELETE** /tags/{tagId} | Delete tag
[**searchNote**](UsersApi.md#searchNote) | **GET** /notes/{noteId} | Search note
[**searchNotes**](UsersApi.md#searchNotes) | **GET** /notes | Search notes
[**searchSongs**](UsersApi.md#searchSongs) | **GET** /songs | Search songs
[**searchTags**](UsersApi.md#searchTags) | **GET** /tags | Search tags
[**searchYtItems**](UsersApi.md#searchYtItems) | **GET** /yt-items | Search yt items
[**updateNote**](UsersApi.md#updateNote) | **PUT** /notes/{noteId} | Update note
[**updateSong**](UsersApi.md#updateSong) | **PUT** /songs/{songId} | Update song


# **addNote**
> ItemCreated addNote(noteItem)

Add note

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiAddNoteRequest = {
  // NoteItem | Note to add
  noteItem: {
    id: "4daef72846cae99923dfd6ez",
    creationDate: "2014-01-02T12:48:00Z",
    text: "Example text",
  },
};

apiInstance.addNote(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noteItem** | **NoteItem**| Note to add |


### Return type

**ItemCreated**

### Authorization

[MellovAuthorizer](README.md#MellovAuthorizer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | item added |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |
**400** | invalid input, object invalid |  -  |
**409** | an existing item already exists |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **addSong**
> ItemCreated addSong(songItem)

Add song

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiAddSongRequest = {
  // SongItem | Song to add
  songItem: {
    id: "5daef72831cae99923dad6ez",
    title: "G-Eazy - Far alone",
    url: "https://youtube.com/watch?v=sxV1_Lr1yf0",
    dateAdded: "2013-12-06T00:25:26Z",
    tags: ["dance","party"],
  },
};

apiInstance.addSong(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **songItem** | **SongItem**| Song to add |


### Return type

**ItemCreated**

### Authorization

[MellovAuthorizer](README.md#MellovAuthorizer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | item added |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |
**400** | invalid input, object invalid |  -  |
**409** | an existing item already exists |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **addTag**
> ItemCreated addTag(tagItem)

Add tag

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiAddTagRequest = {
  // TagItem | Tag to add
  tagItem: {
    id: "5daef72831cae99923dad6ez",
    name: "Dance",
  },
};

apiInstance.addTag(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagItem** | **TagItem**| Tag to add |


### Return type

**ItemCreated**

### Authorization

[MellovAuthorizer](README.md#MellovAuthorizer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | item added |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |
**400** | invalid input, object invalid |  -  |
**409** | an existing item already exists |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteNote**
> void deleteNote()

Delete note

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiDeleteNoteRequest = {
  // string | The note Id
  noteId: "noteId_example",
};

apiInstance.deleteNote(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noteId** | [**string**] | The note Id | defaults to undefined


### Return type

**void**

### Authorization

[MellovAuthorizer](README.md#MellovAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | item deleted |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |
**400** | invalid input, object invalid |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteSong**
> void deleteSong()

Delete song

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiDeleteSongRequest = {
  // string | The song Id
  songId: "songId_example",
};

apiInstance.deleteSong(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **songId** | [**string**] | The song Id | defaults to undefined


### Return type

**void**

### Authorization

[MellovAuthorizer](README.md#MellovAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | item deleted |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |
**400** | invalid input, object invalid |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteTag**
> void deleteTag()

Delete tag

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiDeleteTagRequest = {
  // string | The tag Id
  tagId: "tagId_example",
};

apiInstance.deleteTag(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | [**string**] | The tag Id | defaults to undefined


### Return type

**void**

### Authorization

[MellovAuthorizer](README.md#MellovAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | item deleted |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |
**400** | invalid input, object invalid |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchNote**
> NoteItem searchNote()

Find note

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiSearchNoteRequest = {
  // string | The note Id
  noteId: "noteId_example",
};

apiInstance.searchNote(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noteId** | [**string**] | The note Id | defaults to undefined


### Return type

**NoteItem**

### Authorization

[MellovAuthorizer](README.md#MellovAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | search result matching criteria |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |
**400** | invalid input, object invalid |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchNotes**
> Array<NoteItem> searchNotes()

Find notes

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiSearchNotesRequest = {
  // number | number of records to skip for pagination (optional)
  skip: 0,
  // number | maximum number of records to return (optional)
  limit: 0,
};

apiInstance.searchNotes(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | [**number**] | number of records to skip for pagination | (optional) defaults to undefined
 **limit** | [**number**] | maximum number of records to return | (optional) defaults to undefined


### Return type

**Array<NoteItem>**

### Authorization

[MellovAuthorizer](README.md#MellovAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | search result matching criteria |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |
**400** | invalid input, object invalid |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchSongs**
> Array<SongItem> searchSongs()

Find songs

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiSearchSongsRequest = {
  // number | number of records to skip for pagination (optional)
  skip: 0,
  // number | maximum number of records to return (optional)
  limit: 0,
  // string | a phrase song's title must contain (optional)
  title: "title_example",
  // Array<string> | tags which song must contain (optional)
  tags: [
    "tags_example",
  ],
  // string | type of sort to use (optional)
  sort: "sort_example",
};

apiInstance.searchSongs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | [**number**] | number of records to skip for pagination | (optional) defaults to undefined
 **limit** | [**number**] | maximum number of records to return | (optional) defaults to undefined
 **title** | [**string**] | a phrase song&#39;s title must contain | (optional) defaults to undefined
 **tags** | **Array&lt;string&gt;** | tags which song must contain | (optional) defaults to undefined
 **sort** | [**string**] | type of sort to use | (optional) defaults to undefined


### Return type

**Array<SongItem>**

### Authorization

[MellovAuthorizer](README.md#MellovAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | search result matching criteria |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |
**400** | invalid input, object invalid |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchTags**
> Array<TagItem> searchTags()

Find tags

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiSearchTagsRequest = {
  // number | number of records to skip for pagination (optional)
  skip: 0,
  // number | maximum number of records to return (optional)
  limit: 0,
};

apiInstance.searchTags(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | [**number**] | number of records to skip for pagination | (optional) defaults to undefined
 **limit** | [**number**] | maximum number of records to return | (optional) defaults to undefined


### Return type

**Array<TagItem>**

### Authorization

[MellovAuthorizer](README.md#MellovAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | search result matching criteria |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |
**400** | invalid input, object invalid |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchYtItems**
> Array<YtVideoItem> searchYtItems()

Find yt items

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiSearchYtItemsRequest = {
  // string | title to search
  title: "title_example",
  // number | maximum number of records to return (optional)
  limit: 0,
};

apiInstance.searchYtItems(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **title** | [**string**] | title to search | defaults to undefined
 **limit** | [**number**] | maximum number of records to return | (optional) defaults to undefined


### Return type

**Array<YtVideoItem>**

### Authorization

[MellovAuthorizer](README.md#MellovAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | search result matching criteria |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |
**400** | invalid input, object invalid |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateNote**
> void updateNote(noteItem)

Update note

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiUpdateNoteRequest = {
  // string | The note Id
  noteId: "noteId_example",
  // NoteItem | Note to add
  noteItem: {
    id: "4daef72846cae99923dfd6ez",
    creationDate: "2014-01-02T12:48:00Z",
    text: "Example text",
  },
};

apiInstance.updateNote(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noteItem** | **NoteItem**| Note to add |
 **noteId** | [**string**] | The note Id | defaults to undefined


### Return type

**void**

### Authorization

[MellovAuthorizer](README.md#MellovAuthorizer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | item updated |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |
**400** | invalid input, object invalid |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateSong**
> SongItem updateSong(songItem)

Update song

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiUpdateSongRequest = {
  // string | The song Id
  songId: "songId_example",
  // SongItem | Song to update
  songItem: {
    id: "5daef72831cae99923dad6ez",
    title: "G-Eazy - Far alone",
    url: "https://youtube.com/watch?v=sxV1_Lr1yf0",
    dateAdded: "2013-12-06T00:25:26Z",
    tags: ["dance","party"],
  },
};

apiInstance.updateSong(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **songItem** | **SongItem**| Song to update |
 **songId** | [**string**] | The song Id | defaults to undefined


### Return type

**SongItem**

### Authorization

[MellovAuthorizer](README.md#MellovAuthorizer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | item updated |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |
**400** | invalid input, object invalid |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


