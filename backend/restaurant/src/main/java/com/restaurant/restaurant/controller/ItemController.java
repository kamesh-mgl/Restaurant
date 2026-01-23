package com.restaurant.restaurant.controller;


import com.restaurant.restaurant.model.MenuItem;
import com.restaurant.restaurant.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class ItemController {

    @Autowired
    private ItemService service;

    @PostMapping("/additem")
    public ResponseEntity<String> addItem(@RequestBody MenuItem item)
    {
       try{
           service.addItem(item);
           return new ResponseEntity<>("Item Added",HttpStatus.OK);
       } catch (Exception e) {
           return new ResponseEntity<>("Couldn't add the item",HttpStatus.BAD_REQUEST);
       }
    }

    @GetMapping("/items")
    public ResponseEntity<List<MenuItem>> getItems()
    {
        try{
            return new ResponseEntity<>(service.getItems(),HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    @GetMapping("/item/{itemId}")
    public ResponseEntity<MenuItem> getItembyId(@PathVariable Integer itemId)
    {
       try{
           return new ResponseEntity<>(service.getItembyId(itemId),HttpStatus.OK);
       } catch (Exception e) {
           return new ResponseEntity<>(new MenuItem(),HttpStatus.NOT_FOUND);
       }
    }
    @PutMapping("/updateitem")
    public ResponseEntity<String> updateItem(@RequestBody MenuItem item)
    {
        try{
            service.updateItem(item);
            return  new ResponseEntity<>("Item Modified",HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Item not Modified",HttpStatus.NOT_MODIFIED);
        }

    }

    @DeleteMapping ("/deleteitem/{itemId}")
    public ResponseEntity<String> deleteItem(@PathVariable Integer itemId)
    {
        try{
            service.deleteItem(itemId);
            return new ResponseEntity<>("Item Deleted",HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Item not Deleted",HttpStatus.BAD_REQUEST);
        }
    }

}
