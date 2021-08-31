
import { HttpService } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { CreateJphDto } from './dto/create-jph.dto';
import { UpdateJphDto } from './dto/update-jph.dto';
import { Jph } from './entities/jph.entity';
import { AxiosResponse } from 'axios';

@Injectable()
export class JphService {
  api: string = 'http://jsonplaceholder.typicode.com';

  constructor(private httpService: HttpService) {
    
  }

  create(createJphDto: CreateJphDto):Observable<any> {
    return this.httpService.get(`${this.api}/posts`).pipe(map(response => response.data));;
  }

  findAll(): Observable<AxiosResponse<Jph[]>> {
    return this.httpService.get(`${this.api}/posts`).pipe(map(response => response.data));;
  }

  findOne(id: number) : Observable<AxiosResponse<Jph>> {
    return this.httpService.get(`${this.api}/posts/${id}`).pipe(map(response => response.data));;
  }

  update(id: number, updateJphDto: UpdateJphDto): Observable<AxiosResponse<Jph>>{
    return this.httpService.get(`${this.api}/posts/${id}`).pipe(map(response => response.data));;
  }

  remove(id: number) {
    return `This action removes a #${id} jph`;
  }
}
