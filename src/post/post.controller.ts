import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Inject, Param, Post } from '@nestjs/common';
import axios from 'axios';
import createPostDto from './dtos/createPost.dto';
import editPostDto from './dtos/editPost.dto';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService){}

    @Get()
    async findAll(): Promise<any>{
        return this.postService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id:number): Promise<any>{
        const payload = {id}
        return this.postService.findOne(payload)
    }

    @Post()
    async create(@Body() createPostDto: createPostDto){
        try{
            return this.postService.create(createPostDto)
        }
        catch(err){
            console.log(err)
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    test(createPostDto) {
        return this.postService.create(createPostDto)
    }

    @Post(':id')
    edit(@Body() editPostDto: editPostDto, @Param('id') userid: number){
        return this.postService.edit(userid, editPostDto)
    }

    @Delete(':id')
    delete(@Param('id') userid:number){
        return this.postService.delete(userid)
    }
}
