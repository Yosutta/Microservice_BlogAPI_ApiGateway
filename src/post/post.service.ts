import { Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

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

        }
    }

    create(createPostDto){
        const pattern = {type: 'post', action:'create'}
        const payload = createPostDto
        return this.clientServicePost.send<string>(pattern, payload)
    }
}
