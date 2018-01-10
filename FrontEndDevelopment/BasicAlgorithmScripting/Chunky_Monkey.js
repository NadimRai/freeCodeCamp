function chunkArrayInGroups(arr, size) {

    var cut = size;
    var att = [];
    var increase;

    att.push(arr.slice(0, size));
    increase = cut + cut;

    do {
        att.push(arr.slice(size, increase));
        size += cut;
        increase += cut;

    } while (size < arr.length);



    return att;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
