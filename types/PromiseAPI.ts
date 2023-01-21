import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { ItemCreated } from '..\models\ItemCreated';
import { NoteItem } from '..\models\NoteItem';
import { SongItem } from '..\models\SongItem';
import { TagItem } from '..\models\TagItem';
import { YtVideoItem } from '..\models\YtVideoItem';
import { ObservableCORSApi } from './ObservableAPI';

import { CORSApiRequestFactory, CORSApiResponseProcessor} from "../apis/CORSApi";
export class PromiseCORSApi {
    private api: ObservableCORSApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CORSApiRequestFactory,
        responseProcessor?: CORSApiResponseProcessor
    ) {
        this.api = new ObservableCORSApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Enable CORS by returning correct headers 
     * CORS support
     * @param noteId The note Id
     */
    public notesNoteIdOptions(noteId: string, _options?: Configuration): Promise<void> {
        const result = this.api.notesNoteIdOptions(noteId, _options);
        return result.toPromise();
    }

    /**
     * Enable CORS by returning correct headers 
     * CORS support
     */
    public notesOptions(_options?: Configuration): Promise<void> {
        const result = this.api.notesOptions(_options);
        return result.toPromise();
    }

    /**
     * Enable CORS by returning correct headers 
     * CORS support
     */
    public songsOptions(_options?: Configuration): Promise<void> {
        const result = this.api.songsOptions(_options);
        return result.toPromise();
    }

    /**
     * Enable CORS by returning correct headers 
     * CORS support
     * @param songId The song Id
     */
    public songsSongIdOptions(songId: string, _options?: Configuration): Promise<void> {
        const result = this.api.songsSongIdOptions(songId, _options);
        return result.toPromise();
    }

    /**
     * Enable CORS by returning correct headers 
     * CORS support
     */
    public tagsOptions(_options?: Configuration): Promise<void> {
        const result = this.api.tagsOptions(_options);
        return result.toPromise();
    }

    /**
     * Enable CORS by returning correct headers 
     * CORS support
     * @param tagId The tag Id
     */
    public tagsTagIdOptions(tagId: string, _options?: Configuration): Promise<void> {
        const result = this.api.tagsTagIdOptions(tagId, _options);
        return result.toPromise();
    }

    /**
     * Enable CORS by returning correct headers 
     * CORS support
     */
    public ytItemsOptions(_options?: Configuration): Promise<void> {
        const result = this.api.ytItemsOptions(_options);
        return result.toPromise();
    }


}



import { ObservableUsersApi } from './ObservableAPI';

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class PromiseUsersApi {
    private api: ObservableUsersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add note
     * Add note
     * @param noteItem Note to add
     */
    public addNote(noteItem: NoteItem, _options?: Configuration): Promise<ItemCreated> {
        const result = this.api.addNote(noteItem, _options);
        return result.toPromise();
    }

    /**
     * Add song
     * Add song
     * @param songItem Song to add
     */
    public addSong(songItem: SongItem, _options?: Configuration): Promise<ItemCreated> {
        const result = this.api.addSong(songItem, _options);
        return result.toPromise();
    }

    /**
     * Add tag
     * Add tag
     * @param tagItem Tag to add
     */
    public addTag(tagItem: TagItem, _options?: Configuration): Promise<ItemCreated> {
        const result = this.api.addTag(tagItem, _options);
        return result.toPromise();
    }

    /**
     * Delete note
     * Delete note
     * @param noteId The note Id
     */
    public deleteNote(noteId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteNote(noteId, _options);
        return result.toPromise();
    }

    /**
     * Delete song
     * Delete song
     * @param songId The song Id
     */
    public deleteSong(songId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteSong(songId, _options);
        return result.toPromise();
    }

    /**
     * Delete tag
     * Delete tag
     * @param tagId The tag Id
     */
    public deleteTag(tagId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteTag(tagId, _options);
        return result.toPromise();
    }

    /**
     * Find note
     * Search note
     * @param noteId The note Id
     */
    public searchNote(noteId: string, _options?: Configuration): Promise<NoteItem> {
        const result = this.api.searchNote(noteId, _options);
        return result.toPromise();
    }

    /**
     * Find notes
     * Search notes
     * @param skip number of records to skip for pagination
     * @param limit maximum number of records to return
     */
    public searchNotes(skip?: number, limit?: number, _options?: Configuration): Promise<Array<NoteItem>> {
        const result = this.api.searchNotes(skip, limit, _options);
        return result.toPromise();
    }

    /**
     * Find songs
     * Search songs
     * @param skip number of records to skip for pagination
     * @param limit maximum number of records to return
     * @param title a phrase song&#39;s title must contain
     * @param tags tags which song must contain
     * @param sort type of sort to use
     */
    public searchSongs(skip?: number, limit?: number, title?: string, tags?: Array<string>, sort?: string, _options?: Configuration): Promise<Array<SongItem>> {
        const result = this.api.searchSongs(skip, limit, title, tags, sort, _options);
        return result.toPromise();
    }

    /**
     * Find tags
     * Search tags
     * @param skip number of records to skip for pagination
     * @param limit maximum number of records to return
     */
    public searchTags(skip?: number, limit?: number, _options?: Configuration): Promise<Array<TagItem>> {
        const result = this.api.searchTags(skip, limit, _options);
        return result.toPromise();
    }

    /**
     * Find yt items
     * Search yt items
     * @param title title to search
     * @param limit maximum number of records to return
     */
    public searchYtItems(title: string, limit?: number, _options?: Configuration): Promise<Array<YtVideoItem>> {
        const result = this.api.searchYtItems(title, limit, _options);
        return result.toPromise();
    }

    /**
     * Update note
     * Update note
     * @param noteId The note Id
     * @param noteItem Note to add
     */
    public updateNote(noteId: string, noteItem: NoteItem, _options?: Configuration): Promise<void> {
        const result = this.api.updateNote(noteId, noteItem, _options);
        return result.toPromise();
    }

    /**
     * Update song
     * Update song
     * @param songId The song Id
     * @param songItem Song to update
     */
    public updateSong(songId: string, songItem: SongItem, _options?: Configuration): Promise<SongItem> {
        const result = this.api.updateSong(songId, songItem, _options);
        return result.toPromise();
    }


}



