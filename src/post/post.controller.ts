import { Body, Controller, Get, HttpCode, Inject, Param, Post } from '@nestjs/common';
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
    create(@Body() createPostDto: createPostDto){
        return this.postService.create(createPostDto)
    }

    // @Post()
    // edit(@Body() editPostDto: editPostDto){
    //     return this
    // }
}
