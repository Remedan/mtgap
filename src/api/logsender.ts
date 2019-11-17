import Request from 'root/lib/request';
import { ParseResults } from 'root/models/indicators';

export async function uploadpackfile(results: ParseResults[]): Promise<{ [index: string]: string }> {
  //console.log('SENDER!');
  //console.log(results.filter(res => res.indicator === 17));
  //console.log(token);
  const res = await Request.gzip<ParseResults[], { [index: string]: string }>(
    '/mtg/donew2.php?cmd=cm_uploadpackfile',
    results
  );
  return res;
}