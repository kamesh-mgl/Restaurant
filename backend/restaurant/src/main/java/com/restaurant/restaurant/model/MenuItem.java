package com.restaurant.restaurant.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MenuItem {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer itemId;

    private String itemName;
    private String itemPrice;
    private String itemType;
    private String itemDesc;
    private String itemImage;
}
