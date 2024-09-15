let selection_sort=(arr)=>{
    let n=arr.length;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if(arr[i]>arr[j]){
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
}

let linear_search=(arr,target)=>{
    let n=arr.length;
    for(let i=0;i<n;i++){
        if(arr[i]===target){
            return true;
        }
    }
    return false;
}
