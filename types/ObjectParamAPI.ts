import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { ItemCreated } from '../models/ItemCreated';
import { NoteItem } from '../models/NoteItem';
import { SongItem } from '../models/SongItem';
import { TagItem } from '../models/TagItem';
import { YtVideoItem } from '../models/YtVideoItem';

import { ObservableCORSApi } from "./ObservableAPI";
import { CORSApiRequestFactory, CORSApiResponseProcessor} from "../apis/CORSApi";

export interface CORSApiNotesNoteIdOptionsRequest {
    /**
     * The note Id
     * @type string
     * @memberof CORSApinotesNoteIdOptions
     */
    noteId: string
}

export interface CORSApiNotesOptionsRequest {
}

export interface CORSApiSongsOptionsRequest {
}

export interface CORSApiSongsSongIdOptionsRequest {
    /**
     * The song Id
     * @type string
     * @memberof CORSApisongsSongIdOptions
     */
    songId: string
}

export interface CORSApiTagsOptionsRequest {
}

export interface CORSApiTagsTagIdOptionsRequest {
    /**
     * The tag Id
     * @type string
     * @memberof CORSApitagsTagIdOptions
     */
    tagId: string
}

export interface CORSApiYtItemsOptionsRequest {
}

export class ObjectCORSApi {
    private api: ObservableCORSApi

    public constructor(configuration: Configuration, requestFactory?: CORSApiRequestFactory, responseProcessor?: CORSApiResponseProcessor) {
        this.api = new ObservableCORSApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Enable CORS by returning correct headers 
     * CORS support
     * @param param the request object
     */
    public notesNoteIdOptions(param: CORSApiNotesNoteIdOptionsRequest, options?: Configuration): Promise<void> {
        return this.api.notesNoteIdOptions(param.noteId,  options).toPromise();
    }

    /**
     * Enable CORS by returning correct headers 
     * CORS support
     * @param param the request object
     */
    public notesOptions(param: CORSApiNotesOptionsRequest = {}, options?: Configuration): Promise<void> {
        return this.api.notesOptions( options).toPromise();
    }

    /**
     * Enable CORS by returning correct headers 
     * CORS support
     * @param param the request object
     */
    public songsOptions(param: CORSApiSongsOptionsRequest = {}, options?: Configuration): Promise<void> {
        return this.api.songsOptions( options).toPromise();
    }

    /**
     * Enable CORS by returning correct headers 
     * CORS support
     * @param param the request object
     */
    public songsSongIdOptions(param: CORSApiSongsSongIdOptionsRequest, options?: Configuration): Promise<void> {
        return this.api.songsSongIdOptions(param.songId,  options).toPromise();
    }

    /**
     * Enable CORS by returning correct headers 
     * CORS support
     * @param param the request object
     */
    public tagsOptions(param: CORSApiTagsOptionsRequest = {}, options?: Configuration): Promise<void> {
        return this.api.tagsOptions( options).toPromise();
    }

    /**
     * Enable CORS by returning correct headers 
     * CORS support
     * @param param the request object
     */
    public tagsTagIdOptions(param: CORSApiTagsTagIdOptionsRequest, options?: Configuration): Promise<void> {
        return this.api.tagsTagIdOptions(param.tagId,  options).toPromise();
    }

    /**
     * Enable CORS by returning correct headers 
     * CORS support
     * @param param the request object
     */
    public ytItemsOptions(param: CORSApiYtItemsOptionsRequest = {}, options?: Configuration): Promise<void> {
        return this.api.ytItemsOptions( options).toPromise();
    }

}

import { ObservableUsersApi } from "./ObservableAPI";
import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";

export interface UsersApiAddNoteRequest {
    /**
     * Note to add
     * @type NoteItem
     * @memberof UsersApiaddNote
     */
    noteItem: NoteItem
}

export interface UsersApiAddSongRequest {
    /**
     * Song to add
     * @type SongItem
     * @memberof UsersApiaddSong
     */
    songItem: SongItem
}

export interface UsersApiAddTagRequest {
    /**
     * Tag to add
     * @type TagItem
     * @memberof UsersApiaddTag
     */
    tagItem: TagItem
}

export interface UsersApiDeleteNoteRequest {
    /**
     * The note Id
     * @type string
     * @memberof UsersApideleteNote
     */
    noteId: string
}

export interface UsersApiDeleteSongRequest {
    /**
     * The song Id
     * @type string
     * @memberof UsersApideleteSong
     */
    songId: string
}

export interface UsersApiDeleteTagRequest {
    /**
     * The tag Id
     * @type string
     * @memberof UsersApideleteTag
     */
    tagId: string
}

export interface UsersApiSearchNoteRequest {
    /**
     * The note Id
     * @type string
     * @memberof UsersApisearchNote
     */
    noteId: string
}

export interface UsersApiSearchNotesRequest {
    /**
     * number of records to skip for pagination
     * @type number
     * @memberof UsersApisearchNotes
     */
    skip?: number
    /**
     * maximum number of records to return
     * @type number
     * @memberof UsersApisearchNotes
     */
    limit?: number
}

export interface UsersApiSearchSongsRequest {
    /**
     * number of records to skip for pagination
     * @type number
     * @memberof UsersApisearchSongs
     */
    skip?: number
    /**
     * maximum number of records to return
     * @type number
     * @memberof UsersApisearchSongs
     */
    limit?: number
    /**
     * a phrase song&#39;s title must contain
     * @type string
     * @memberof UsersApisearchSongs
     */
    title?: string
    /**
     * tags which song must contain
     * @type Array&lt;string&gt;
     * @memberof UsersApisearchSongs
     */
    tags?: Array<string>
    /**
     * type of sort to use
     * @type string
     * @memberof UsersApisearchSongs
     */
    sort?: string
}

export interface UsersApiSearchTagsRequest {
    /**
     * number of records to skip for pagination
     * @type number
     * @memberof UsersApisearchTags
     */
    skip?: number
    /**
     * maximum number of records to return
     * @type number
     * @memberof UsersApisearchTags
     */
    limit?: number
}

export interface UsersApiSearchYtItemsRequest {
    /**
     * title to search
     * @type string
     * @memberof UsersApisearchYtItems
     */
    title: string
    /**
     * maximum number of records to return
     * @type number
     * @memberof UsersApisearchYtItems
     */
    limit?: number
}

export interface UsersApiUpdateNoteRequest {
    /**
     * The note Id
     * @type string
     * @memberof UsersApiupdateNote
     */
    noteId: string
    /**
     * Note to add
     * @type NoteItem
     * @memberof UsersApiupdateNote
     */
    noteItem: NoteItem
}

export interface UsersApiUpdateSongRequest {
    /**
     * The song Id
     * @type string
     * @memberof UsersApiupdateSong
     */
    songId: string
    /**
     * Song to update
     * @type SongItem
     * @memberof UsersApiupdateSong
     */
    songItem: SongItem
}

export class ObjectUsersApi {
    private api: ObservableUsersApi

    public constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add note
     * Add note
     * @param param the request object
     */
    public addNote(param: UsersApiAddNoteRequest, options?: Configuration): Promise<ItemCreated> {
        return this.api.addNote(param.noteItem,  options).toPromise();
    }

    /**
     * Add song
     * Add song
     * @param param the request object
     */
    public addSong(param: UsersApiAddSongRequest, options?: Configuration): Promise<ItemCreated> {
        return this.api.addSong(param.songItem,  options).toPromise();
    }

    /**
     * Add tag
     * Add tag
     * @param param the request object
     */
    public addTag(param: UsersApiAddTagRequest, options?: Configuration): Promise<ItemCreated> {
        return this.api.addTag(param.tagItem,  options).toPromise();
    }

    /**
     * Delete note
     * Delete note
     * @param param the request object
     */
    public deleteNote(param: UsersApiDeleteNoteRequest, options?: Configuration): Promise<void> {
        return this.api.deleteNote(param.noteId,  options).toPromise();
    }

    /**
     * Delete song
     * Delete song
     * @param param the request object
     */
    public deleteSong(param: UsersApiDeleteSongRequest, options?: Configuration): Promise<void> {
        return this.api.deleteSong(param.songId,  options).toPromise();
    }

    /**
     * Delete tag
     * Delete tag
     * @param param the request object
     */
    public deleteTag(param: UsersApiDeleteTagRequest, options?: Configuration): Promise<void> {
        return this.api.deleteTag(param.tagId,  options).toPromise();
    }

    /**
     * Find note
     * Search note
     * @param param the request object
     */
    public searchNote(param: UsersApiSearchNoteRequest, options?: Configuration): Promise<NoteItem> {
        return this.api.searchNote(param.noteId,  options).toPromise();
    }

    /**
     * Find notes
     * Search notes
     * @param param the request object
     */
    public searchNotes(param: UsersApiSearchNotesRequest = {}, options?: Configuration): Promise<Array<NoteItem>> {
        return this.api.searchNotes(param.skip, param.limit,  options).toPromise();
    }

    /**
     * Find songs
     * Search songs
     * @param param the request object
     */
    public searchSongs(param: UsersApiSearchSongsRequest = {}, options?: Configuration): Promise<Array<SongItem>> {
        return this.api.searchSongs(param.skip, param.limit, param.title, param.tags, param.sort,  options).toPromise();
    }

    /**
     * Find tags
     * Search tags
     * @param param the request object
     */
    public searchTags(param: UsersApiSearchTagsRequest = {}, options?: Configuration): Promise<Array<TagItem>> {
        return this.api.searchTags(param.skip, param.limit,  options).toPromise();
    }

    /**
     * Find yt items
     * Search yt items
     * @param param the request object
     */
    public searchYtItems(param: UsersApiSearchYtItemsRequest, options?: Configuration): Promise<Array<YtVideoItem>> {
        return this.api.searchYtItems(param.title, param.limit,  options).toPromise();
    }

    /**
     * Update note
     * Update note
     * @param param the request object
     */
    public updateNote(param: UsersApiUpdateNoteRequest, options?: Configuration): Promise<void> {
        return this.api.updateNote(param.noteId, param.noteItem,  options).toPromise();
    }

    /**
     * Update song
     * Update song
     * @param param the request object
     */
    public updateSong(param: UsersApiUpdateSongRequest, options?: Configuration): Promise<SongItem> {
        return this.api.updateSong(param.songId, param.songItem,  options).toPromise();
    }

}
