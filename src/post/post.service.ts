import { Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import editPostDto from './dtos/editPost.dto';

@Injectable()
export class PostService {
    constructor(@Inject('SERVICE_POST') private readonly clientServicePost: ClientProxy){}

    findAll(){
        try{
            const pattern = {type: 'post', action:'get_all'}
            const payload = {}
            return this.clientServicePost.send<string>(pattern,payload)
        } catch(err){
            throw new InternalServerErrorException()
        }
    }

    findOne(payload){
        try{
            const pattern = {type: 'post', action:'get_one'}
            return this.clientServicePost.send<string>(pattern, payload)
        }
        catch(err){
            throw new Error(err)
        }   
    }

    async create(createPostDto){
        try{
            const pattern = {type: 'post', action:'create'}
            const payload = createPostDto
            // return new Promise<any>((r,j)=>{
            //     r(this.clientServicePost.send<string>(pattern, payload))
            // }) 
            return this.clientServicePost.send<string>(pattern, payload)
        }
        catch(err){
            console.log(err)
            throw new Error(err)
        }
    }

    edit(userid, editPostDto){
        const pattern  = {type: 'post', action: 'edit'}
        editPostDto.userid = userid
        const payload = editPostDto
        return this.clientServicePost.send<string>(pattern,payload)
    }

    delete(userid){
        const pattern = {type: 'post', action: 'delete'}
        const payload = userid
        return this.clientServicePost.send<string>(pattern, payload)
    }
}
