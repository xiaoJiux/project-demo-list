/*聊天数据去除头部数字*/
export function cleanNumber( str: string ) {
  const data = JSON.parse( str.replace( /^[0-9]+/, "" ) );
  return data;
}
