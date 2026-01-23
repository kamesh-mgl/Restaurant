package com.restaurant.restaurant.service;


import com.restaurant.restaurant.model.MenuItem;
import com.restaurant.restaurant.repo.ItemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class ItemService {

    @Autowired
    private ItemRepo repo;

    public void addItem(MenuItem item)
    {
        System.out.println("service class");
        repo.save(item);
    }


    public List<MenuItem> getItems() {
        return  repo.findAll();
    }

    public MenuItem getItembyId(Integer itemId) {
        return repo.findById(itemId).orElse(new MenuItem());
    }

    public void updateItem(MenuItem item) {
        repo.save(item);
    }

    public void deleteItem(Integer itemId) {
        repo.deleteById(itemId);
    }
}

