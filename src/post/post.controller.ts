import { Controller } from '@nestjs/common';
import { PostInterface } from 'src/interface';
import { PostService } from './post.service';

@Controller('post')
export class PostController implements PostInterface {
    constructor(private service: PostService) { }

    create(arg0: any, arg1: any) {
        throw new Error('Method not implemented.');
    }
    show(arg0: any) {
        throw new Error('Method not implemented.');
    }
    edit(arg0: any) {
        throw new Error('Method not implemented.');
    }
    update(arg0: any, arg1: any) {
        throw new Error('Method not implemented.');
    }
    destroy(arg0: any) {
        throw new Error('Method not implemented.');
    }
}
